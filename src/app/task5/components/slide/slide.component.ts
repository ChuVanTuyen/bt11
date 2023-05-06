import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnChanges, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
// import { PlatfromBrowserService } from 'src/app/services/platfrom-browser.service';

interface Song {
  name: string,
  artist: string,
  level: string,
  img: string,
  kindOfMusic: string
}



@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild("ngSlide") slide!: ElementRef;
  @Input() list: Array<Song> | undefined;
  @Input() itemMargin: number | undefined;
  @Input() type: number | undefined;
  resizeWidth = 0;
  showItemNum = 0;// số phần tử nằm gọn traong khung hình
  slideItem: HTMLElement | undefined;// phần tử html trong slide;
  slidePosition = 0;// giá trị slide đã translateX
  slideLength = 0;// số các phần tử có trong slide
  slideWidth = 0;// width của slide
  itemWidth: number | undefined;// width của 1 phần tử có trong slide
  isBrowser = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnChanges(): void {
    if (this.list) {
      this.slideLength = this.list.length;
    }
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

    if (this.isBrowser) {
      this.slideItem = this.slide.nativeElement.querySelector(".item");
      if (this.slideItem) {
        this.itemWidth = this.slideItem.getBoundingClientRect().width;// lấy chiều rộng của item trong slide
        this.slideWidth = this.slide.nativeElement.getBoundingClientRect().width; // lấy chiều rộng của slide
        if (this.itemMargin) {
          this.showItemNum = Math.floor(this.slideWidth / (this.itemWidth + this.itemMargin));// số item nằm gọn trong chiều rộng của 1 slide
        }
      }
    }
  }
  onclickBtnDirection(event: any, left: boolean): void {
    let e = event.target.parentElement;
    if (this.slideLength && this.itemWidth && this.itemMargin) {
      if (left) {
        // nếu width phần bị che ở phía trái còn ít hơn độ rộng hiển thị thì transfrom translate về 0
        if (-this.slidePosition <= (this.itemWidth + this.itemMargin) * this.showItemNum) {
          this.slidePosition = 0;
        } else { // dịch dịch trái showItemNum phần tử
          this.slidePosition += (this.itemWidth + this.itemMargin) * this.showItemNum;
        }
        this.slide.nativeElement.style.transform = `translateX(${this.slidePosition}px)`;
        return;
      } else {
        // nếu width slide bị che ở phía phải còn ít hơn độ rộng hiển thị thì transfrom translate về cuối slide
        if (Math.floor(-this.slidePosition / (this.itemWidth + this.itemMargin)) + 2 * this.showItemNum >= this.slideLength - 1) {
          this.slidePosition = -this.slideLength * (this.itemWidth + this.itemMargin) + this.slideWidth + this.itemMargin;
          this.slide.nativeElement.style.transform = `translateX(${this.slidePosition}px)`;
          return;
        }
        this.slidePosition -= this.showItemNum * (this.itemWidth + this.itemMargin);
        this.slide.nativeElement.style.transform = `translateX(${this.slidePosition}px)`;
      }
    }
  }

  screenChange(): void { // sự kiện thay đổi kích thước màn hình
    this.slideWidth = this.slide.nativeElement.getBoundingClientRect().width;// lấy lại width của slide
    if (this.itemWidth && this.itemMargin) {
      this.showItemNum = Math.floor(this.slideWidth / (this.itemWidth + this.itemMargin));// thay đổi số phần tử mỗi lần dịch
    }
    this.slidePosition = 0;
    this.slide.nativeElement.style.transform = `translateX(0px)`;
  }
}
