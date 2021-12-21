import { Injectable } from "@angular/core";

// acquaint our compiler with "toaster"
declare let toastr: any;

@Injectable()
export class ToastrService {


  // toastr success method
  success(message: string, title?: string) {
    toastr.success(message, title)
  }

  // toaster info method
  info(message: string, title?: string) {
    toastr.info(message, title)
  }

  // toaster warning method
  warning(message: string, title?: string) {
    toastr.warning(message, title)
  }

  // toaster error method
  error(message: string, title?: string) {
    toastr.error(message, title)
  }
}
