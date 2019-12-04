<template>
  <div class="main-container">
    <!--   TOP   -->
    <section class="first-section first-section-parallarx" style="background-image: url('src/img/hero.jpg')"
             data-paroller-factor="0.7">
      <div class="first-section-overlay"></div>
      <div class="first-section-mask"></div>
      <div class="parallax-inner">
        <div class="header-logo container">
          <a class="GTM-Header-Logo" href="https://www.finnotech.ir" target="_blank">
            <img src="src/img/0-03.png" alt="finnotech">
          </a>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-6 col-ms-12 first-section_paragraph">
              <h1 class="mb-3 s-35">راهکارهای فینوتک برای تصفیه حساب گروهی</h1>
              <h2 class="mt-3 lighter-dark-text-50 ">با APIهای فینوتک بانک خود را بسازید!</h2>
              <p class="lh-22 s-16 w-75 text-justify">اگر <strong>تعداد</strong> یا <strong>مبلغ</strong> پرداخت‌های
                کسب‌وکارتان زیاد است، با استفاده از APIهای فینوتک می‌توانید مستقیما به بانک متصل شوید و
                بدون مراجعه به بانک یا اینترنت‌بانک به حساب بانکی خود دسترسی داشته باشید
              </p>
              <ul class="list-unstyled first-section_features">
                <li class="mt-2 s-18">
                  <i class="fas fa-arrow-left mr-1 secondary-color"></i>
                  کاهش هزینه تمام‌شده
                </li>
                <li class="mt-2 s-18">
                  <i class="fas fa-arrow-left mr-1 secondary-color"></i>
                  جلوگیری از خطای انسانی
                </li>
                <li class="mt-2 s-18">
                  <i class="fas fa-arrow-left mr-1 secondary-color"></i>
                  افزایش سرعت تصفیه حساب
                </li>
              </ul>
            </div>
            <div class="col-lg-5 col-md-6 col-ms-12 pb-3">
              <div class="form-container">
                <div class="form-container-inner">
                  <h2 class="mb-3 s-18">فرم درخواست سرویس</h2>
                  <div>

                    <form class="needs-validation register-form" novalidate>
                      <div class="form-group mb-3">
                        <label class="has-float-label" for="fullName">
                          <input type="text" id="fullName" class="form-control" placeholder=" "
                                 required>
                          <span>نام و نام خانوادگی</span>
                          <div class="invalid-feedback">
                            لطفا نام و نام خانوادگی را وارد کنید
                          </div>
                        </label>

                      </div>

                      <!--           if we want prepend          -->
                      <!--                        <div class="input-group-prepend">-->
                      <!--                            <span class="input-group-text" id="basic-addon3"><i class="fas fa-envelope"></i></span>-->
                      <!--                        </div>-->

                      <div class="form-group mb-3 ">
                        <label class="has-float-label" for="myPhoneNumber">
                          <input type="text" class="form-control ltr" id="myPhoneNumber"
                                 maxlength="11" placeholder="09*********" required>
                          <span>شماره تلفن همراه</span>
                          <div class="invalid-feedback">
                            لطفا شماره تلفن همراه خود را وارد کنید
                          </div>
                        </label>

                      </div>
                      <div class="px-3">
                        <div class="form-group mb-0">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radio1" id="needServices" value="needServices" required>
                            <label class="form-check-label px-1" for="needServices">
                              میخواهم سرویسی را انتخاب کنم
                            </label>
                          </div>
                          <div class="form-check form-check-inline ml-5">
                            <input class="form-check-input" type="radio" name="radio1" id="needGuide" value="needGuide" required>
                            <label class="form-check-label px-1" for="needGuide">
                              راهنمایی می‌خواهم
                            </label>
                          </div>
                          <div class="invalid-feedback">
                            لطفا یکی را انتخاب کنید.
                          </div>
                        </div>

                      </div>
                      <div class="form-group mb-3 multi-select">
                        <label class="" for="Methods">
                        </label>
                        <select class="form-control rtl multi-select-input" name="methods[]" id="Methods" style="width: 100%" multiple="multiple">
                          <option value="تبدیل شماره حساب به شبا">تبدیل شماره حساب به شبا</option>
                          <option value="تبدیل شماره کارت به شبا">تبدیل شماره کارت به شبا</option>
                          <option value="تبدیل شماره کارت به حساب">تبدیل شماره کارت به حساب</option>
                          <option value="استعلام شبا">استعلام شبا</option>
                          <option value="استعلام کارت">استعلام کارت</option>
                          <option value="دریافت لیست کارت‌های شتابی">دریافت لیست کارت‌های شتابی</option>
                          <option value="مانده موجودی حساب">مانده موجودی حساب</option>
                          <option value="دریافت گردش حساب">دریافت گردش حساب</option>
                          <option value="استعلام قبوض">استعلام قبوض</option>
                          <option value="واریز وجه به حساب دیگری">واریز وجه به حساب دیگری</option>
                          <option value="مسدودی و رفع مسدودی">مسدودی و رفع مسدودی</option>
                          <option value="استعلام وضعیت چک">استعلام وضعیت چک</option>
                          <option value="احراز هویت">احراز هویت</option>
                          <option value="استعلام سجام">استعلام سجام</option>
                          <option value="اطلاعات صورت‌های مالی و کدال">اطلاعات صورت‌های مالی و کدال</option>
                          <option value="اطلاعات بازار طلا، فلزات گران‌بها و ارز">اطلاعات بازار طلا، فلزات گران‌بها و ارز</option>
                          <option value="اطلاعات بازار بورس و فرابورس">اطلاعات بازار بورس و فرابورس</option>
                          <option value="اطلاعات پردازش‌شده">اطلاعات پردازش‌شده</option>
                        </select>

                        <div class="invalid-feedback">
                          سرویس درخواستی خود را جهت مشاوره انتخاب کنید.
                        </div>
                      </div>
                      <div class="my-2" id="form-container"></div>
                      <button class="GTM-Form-Button finno-btn mb-2 btn-lg btn-block" id="FormSubmit" class="finno-btn mb-2 btn-lg btn-block">ارسال
                      </button>
                    </form>


                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div class="icon-scroll"></div>

    </section>

    <!--   API LISTS  -->
    <section class="api-section">
      <div class="api-section-overlay"></div>
      <div class="api-section-mask"></div>
      <div class="container position-relative">
        <div class="row api-list">
          <div class="col-lg-12 title-holder mb-5">
            <h2 class="text-center s-25">API های فینوتک برای تصفیه حساب</h2>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5 text-center ">
            <a class="api-list_box p-2 d-block" href="https://devbeta.finnotech.ir/oak-transferTo-deposit.html?sandbox=undefined" target="_blank">
              <div class="mx-2 p-3">
                <?xml version="1.0" encoding="utf-8"?>
                <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg class="api-list_img" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 170 150" style="enable-background:new 0 0 170 150;"
                                     xml:space="preserve">
<style type="text/css">
	.st0 {
    stroke: #000000;
    stroke-miterlimit: 10;
  }
</style>
                                    <g>
	<g>
		<path class="st0" d="M53.5,47.9l9,9c1,1,2.6,1,3.5,0l9-9c1-1,1-2.6,0-3.5l0,0c-1-1-2.6-1-3.5,0l-4.7,4.7v-17
			c0-1.4-1.1-2.5-2.5-2.5l0,0c-1.4,0-2.5,1.1-2.5,2.5v17L57,44.4c-1-1-2.6-1-3.5,0l0,0C52.5,45.4,52.5,46.9,53.5,47.9z"/>
        <path class="st0" d="M96.2,90l27.6-7.3v-6.4l-27.6,7.3V90z M123.8,53.3L72.2,67.9v6.5l51.5-14.6v-6.5H123.8z M123.8,64.8
			l-24.3,6.7V78l24.3-6.7V64.8z M140,35.1c-1,0-2.1,0.1-3.2,0.4l-58.2,16L76.7,52l-9,9l4.4-1.3l66.4-18.1c0.5-0.1,1-0.2,1.5-0.2
			c0.8,0,2.8,0.3,2.8,2.6v37c0,2.8-2.8,6.1-6,6.9L43,113.8V68l18.5-5.3l-5-5L37.6,63c-5.9,1.6-10.5,7.3-10.5,12.9v37
			c0,0.6,0.1,1.2,0.2,1.7c0.5,5.5,5,9.8,10.6,9.8h92.3c5.9,0,10.7-4.8,10.7-10.7V93c4.7-2.3,8.1-7.2,8.1-12V44
			C149,38.8,145.2,35.1,140,35.1z M36.8,115.5c-0.3,0-0.5,0.1-0.8,0.1c-0.8,0-2.8-0.3-2.8-2.6V76c0-2.1,1.5-4.4,3.5-5.8L36.8,115.5
			L36.8,115.5z M134.9,113.8c0,2.6-2.1,4.7-4.7,4.7H49.7l85.2-23.6V113.8z"/>
	</g>
</g>
</svg>
              </div>
              <h4>واریز وجه پایا</h4>
              <p>
                (واریز وجه به تمامی حساب‌های بانکی کشور)
              </p>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5 text-center ">
            <a class="api-list_box p-2 d-block" href="https://apibeta.finnotech.ir/" target="_blank">
              <div class="mx-2 p-3">
                <?xml version="1.0" encoding="utf-8"?>
                <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg class="api-list_img" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 170 150" style="enable-background:new 0 0 170 150;" xml:space="preserve">
<g>
	<g>
		<path d="M64,96.9l-4.7-4.7h17c1.4,0,2.5-1.1,2.5-2.5l0,0c0-1.4-1.1-2.5-2.5-2.5h-17l4.7-4.7c1-1,1-2.6,0-3.5l0,0c-1-1-2.6-1-3.5,0
			l-9,9c-1,1-1,2.6,0,3.5l9,9c1,1,2.6,1,3.5,0l0,0C65,99.4,65,97.9,64,96.9z"/>
        <g>
			<path d="M108.6,81.5c2.2,0,4.2-0.1,6.2-0.4V59.5c-2-0.3-4.1-0.4-6.2-0.4c-12.3,0-22.3,4.5-22.3,10.1v2.2
				C86.3,77,96.3,81.5,108.6,81.5L108.6,81.5z"/>
            <path d="M108.6,92.8c2.2,0,4.2-0.1,6.2-0.4v-6.3c-2,0.3-4.1,0.4-6.2,0.4c-10.7,0-19.7-3.4-21.8-8c-0.3,0.7-0.5,1.4-0.5,2.1v2.2
				C86.3,88.3,96.3,92.8,108.6,92.8L108.6,92.8z"/>
            <path d="M114.8,97.9v-0.5c-2,0.3-4.1,0.4-6.2,0.4c-10.7,0-19.7-3.4-21.8-8c-0.3,0.7-0.5,1.4-0.5,2.1V94c0,5.6,10,10.1,22.3,10.1
				c2.5,0,4.8-0.2,7-0.5c-0.5-1.1-0.8-2.3-0.8-3.5V97.9z"/>
            <path d="M140.8,42c-12.3,0-22.3,4.5-22.3,10.1v2.2c0,5.6,10,10.1,22.3,10.1s22.3-4.5,22.3-10.1v-2.2
				C163.1,46.5,153.1,42,140.8,42L140.8,42z"/>
            <path d="M140.8,69.3c-10.7,0-19.7-3.4-21.8-8c-0.3,0.7-0.5,1.4-0.5,2.1v2.2c0,5.6,10,10.1,22.3,10.1s22.3-4.5,22.3-10.1v-2.2
				c0-0.7-0.2-1.4-0.5-2.1C160.5,65.9,151.5,69.3,140.8,69.3L140.8,69.3z"/>
            <path d="M140.8,80.6c-10.7,0-19.7-3.4-21.8-8c-0.3,0.7-0.5,1.4-0.5,2.1v2.2c0,5.6,10,10.1,22.3,10.1s22.3-4.5,22.3-10.1v-2.2
				c0-0.7-0.2-1.4-0.5-2.1C160.5,77.2,151.5,80.6,140.8,80.6L140.8,80.6z"/>
            <path d="M140.8,92.5c-10.7,0-19.7-3.4-21.8-8c-0.3,0.7-0.5,1.4-0.5,2.1v2.2c0,5.6,10,10.1,22.3,10.1s22.3-4.5,22.3-10.1v-2.2
				c0-0.7-0.2-1.4-0.5-2.1C160.5,89.1,151.5,92.5,140.8,92.5L140.8,92.5z"/>
            <path d="M140.8,103.8c-10.7,0-19.7-3.4-21.8-8c-0.3,0.7-0.5,1.4-0.5,2.1v2.2c0,5.6,10,10.1,22.3,10.1s22.3-4.5,22.3-10.1v-2.2
				c0-0.7-0.2-1.4-0.5-2.1C160.5,100.4,151.5,103.8,140.8,103.8L140.8,103.8z"/>
		</g>
        <path d="M24.7,105.1c-4.1,0-7.5-3.4-7.5-7.5V74h64.4c-0.4-0.9-0.6-1.8-0.6-2.8v-2.3c0-3.4,2.3-6.3,6.1-8.6H17.2v-3.7
			c0-4.1,3.4-7.5,7.5-7.5h68.9c4,0,7.2,3.1,7.5,7c1.8-0.2,3.8-0.3,5.8-0.3c0.2,0,0.5,0,0.7,0c-0.8-7.7-7.3-13.7-15.2-13.7H25.9
			c-8.4,0-15.3,6.8-15.3,15.3v39.5c0,8.4,6.8,15.3,15.3,15.3h66.5c4.1,0,7.9-1.7,10.6-4.3c-4.8-0.3-9-1.3-12.5-2.7L24.7,105.1
			L24.7,105.1z"/>
	</g>
</g>
</svg>
              </div>
              <h4>شارژ آنی بن‌کارت </h4>
              <p>
                (واریز آنی و نامحدود)
              </p>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5 text-center ">
            <a class="api-list_box p-2 d-block" href="https://devbeta.finnotech.ir/oak-transferTo-deposit.html?sandbox=undefined" target="_blank">
              <div class="mx-2 p-3">
                <?xml version="1.0" encoding="utf-8"?>
                <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg class="api-list_img" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 170 150" style="enable-background:new 0 0 170 150;" xml:space="preserve">
<style type="text/css">
	.st0{stroke:#000000;stroke-miterlimit:10;}
</style>
                                    <g>
	<path class="st0" d="M139.2,30.9v15.2c0,1.2,1,2.2,2.2,2.2l0,0c1.2,0,2.2-1,2.2-2.2V30.9l4.2,4.2c0.9,0.9,2.3,0.9,3.2,0l0,0
		c0.9-0.9,0.9-2.3,0-3.2l-8.1-8c-0.9-0.9-2.3-0.9-3.2,0l-8.1,8c-0.9,0.9-0.9,2.3,0,3.2l0,0c0.9,0.9,2.3,0.9,3.2,0L139.2,30.9z
		 M35.3,123.8v-15.2c0-1.2-1-2.2-2.2-2.2l0,0c-1.2,0-2.2,1-2.2,2.2v15.2l-4.2-4.2c-0.9-0.9-2.3-0.9-3.2,0l0,0
		c-0.9,0.9-0.9,2.3,0,3.2l8.1,8c0.9,0.9,2.3,0.9,3.2,0l8.1-8c0.9-0.9,0.9-2.3,0-3.2l0,0c-0.9-0.9-2.3-0.9-3.2,0L35.3,123.8z
		 M80.2,57.3l21.7-6v-5.8l-21.7,6V57.3z M77.2,68.1l24.7-6.5v-5.8l-24.7,6.5V68.1z M55.8,54.1l46.1-13v-5.8l-46.1,13
		C55.8,48.3,55.8,54.1,55.8,54.1z M107.6,98.9c5.3,0,9.5-4.3,9.5-9.5V70.8c4.2-2.1,7.3-6.4,7.3-10.7V26.9c0-4.6-3.4-7.9-8-7.9
		c-0.9,0-1.9,0.1-2.8,0.4L24.9,44c-5.3,1.5-9.4,6.5-9.4,11.6v33.1c0,0.5,0.1,1,0.1,1.5c0.4,4.9,4.5,8.7,9.5,8.7
		C25.1,98.9,107.6,98.9,107.6,98.9z M111.8,89.4c0,2.3-1.9,4.2-4.2,4.2h-72l76.1-21.1L111.8,89.4L111.8,89.4z M29.7,48.4L115,24.8
		c0.5-0.1,0.9-0.2,1.4-0.2c0.7,0,2.5,0.2,2.5,2.3V60c0,2.5-2.5,5.4-5.3,6.2L29.7,89.4V48.4z M24.2,90.9c-0.2,0-0.5,0.1-0.7,0.1
		c-0.7,0-2.5-0.2-2.5-2.3V55.5c0-1.8,1.3-3.9,3.2-5.2V90.9z M150.9,55.2c-0.9,0-1.9,0.1-2.8,0.4L128,61.1v2.6c0,1.1-0.2,2.3-0.6,3.4
		l22.1-6.1c0.5-0.1,0.9-0.2,1.4-0.2c0.7,0,2.5,0.2,2.5,2.3v33.1c0,2.5-2.5,5.4-5.3,6.2l-83.8,23.2v-22.9h-5.6V127
		c-0.2,0-0.5,0.1-0.7,0.1c-0.7,0-2.5-0.2-2.5-2.3v-22.2H50v22.2c0,0.5,0.1,1,0.1,1.5c0.4,4.9,4.5,8.7,9.5,8.7h82.5
		c5.3,0,9.5-4.3,9.5-9.5v-18.6c4.2-2.1,7.3-6.4,7.3-10.7V63.1C158.9,58.5,155.6,55.2,150.9,55.2z M146.3,125.5
		c0,2.3-1.9,4.2-4.2,4.2h-72l76.1-21.1L146.3,125.5L146.3,125.5z M136.4,71.4l-15.7,4.4v5.8l15.7-4.4V71.4z M136.4,81.7L120.7,86
		v5.8l15.7-4.3V81.7z M111.7,102.6v1.7l24.7-6.5V92l-16.2,4.3C118.9,99.8,115.6,102.4,111.7,102.6z"/>
</g>
</svg>
              </div>
              <h4>حساب به حساب </h4>
              <p>
                (واریز آنی در یک بانک خاص)
              </p>
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5 text-center ">
            <a class="api-list_box p-2 d-block" href="https://apibeta.finnotech.ir/" target="_blank">
              <div class="mx-2 api-list-box_inner p-3">
                <?xml version="1.0" encoding="utf-8"?>
                <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg class="api-list_img" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 170 150" style="enable-background:new 0 0 170 150;" xml:space="preserve">
<g>
	<path d="M23.3,79.6V56h84l0,0h6.5V39.3c0-8.4-6.8-15.2-15.3-15.2H32c-8.4,0-15.3,6.8-15.3,15.2v39.5c0,8.4,6.8,15.3,15.3,15.3h19.8
		v-7h-21C26.7,87.1,23.3,83.7,23.3,79.6z M23.3,38.6c0-4.1,3.4-7.5,7.5-7.5h68.9c4.1,0,7.5,3.4,7.5,7.5v3.7h-84v-3.7H23.3z M137,60
		H70.5c-8.4,0-15.3,6.8-15.3,15.3v39.5c0,8.4,6.8,15.3,15.3,15.3H137c8.4,0,15.3-6.8,15.3-15.3V75.2C152.3,66.8,145.4,60,137,60z
		 M145.8,115.5c0,4.1-3.4,7.5-7.5,7.5h-69c-4.1,0-7.5-3.4-7.5-7.5V91.9h84V115.5z M145.8,78.2h-84v-3.7c0-4.1,3.4-7.5,7.5-7.5h68.9
		c4.1,0,7.5,3.4,7.5,7.5L145.8,78.2L145.8,78.2z M137,52.9L137,52.9c1.2,1.2,3.1,1.2,4.2,0l8.7-8.7c1.2-1.2,1.2-3.1,0-4.2l-8.7-8.7
		c-1.2-1.2-3.1-1.2-4.2,0l0,0c-1.2,1.2-1.2,3.1,0,4.2l3.5,3.5h-15.3c-1.7,0-3,1.3-3,3l0,0c0,1.7,1.3,3,3,3h15.3l-3.5,3.5
		C135.9,49.8,135.9,51.7,137,52.9z M33.3,101.1L33.3,101.1c-1.2-1.2-3.1-1.2-4.2,0l-8.7,8.7c-1.2,1.2-1.2,3.1,0,4.2l8.7,8.7
		c1.2,1.2,3.1,1.2,4.2,0l0,0c1.2-1.2,1.2-3.1,0-4.2l-3.5-3.5h15.3c1.7,0,3-1.3,3-3l0,0c0-1.7-1.3-3-3-3H29.8l3.5-3.5
		C34.5,104.2,34.5,102.3,33.3,101.1z"/>
</g>
</svg>
              </div>
              <h4>کارت به کارت از مبدا مشخص</h4>
              <p>
                (واریز آنی مبالغ خرد)
              </p>
            </a>
          </div>

        </div>
      </div>
    </section>

    <!--    ABOUT PANELS AND LINKS    -->
    <section class="second-section">
      <div class="container">
        <div class="">
          <div class="row my-5">
            <!--                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 second-section-document_slogan">-->
            <!--                            <h3 class="pt-2">راهکارهای ساده و نوآورانه مالی و سرمایه‌گذاری برای کسب‌وکارها</h3>-->
            <!--                        </div>-->
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 second-section_document mb-3">
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 m-auto text-center">
                <div class="d-block m-2 text-center">
                  <i class="fas fa-columns fa-5x px-2 second-section_icons finno-secondary-color"></i>
                </div>
                <div class="text-center">
                  <h4 class="second-section_header">Document</h4>
                </div>
                <p class="text-justify s-14 lh-22">
                  راهنمای استفاده از کنسول، توضیح کامل سرویس‌ها و نحوة پیاده‌سازی آن‌ها تشریح شده
                  است. </p>
                <div>
                  <a class="GTM-Document-Button-Click" href="https://api.finnotech.ir" target="_blank">
                    <button class="finno-btn px-5 ">مستندات فنی</button>
                  </a>
                </div>
              </div>
            </div>


            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 second-section_sandbox mb-3">
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 m-auto text-center">
                <div class="d-block m-2 text-center">
                  <i class="fas fa-chart-line fa-5x px-2 second-section_icons finno-secondary-color"></i>
                </div>
                <div class="text-center">
                  <h4 class="second-section_header">Sandbox</h4>
                </div>
                <p class="text-justify s-14 lh-22">
                  با ثبت‌نام رایگان، سرویس‌های مختلف و متنوع فینوتک را به‌صورت آزمایشی پیاده‌سازی
                  کنید. </p>
                <div>
                  <a class="GTM-Sandbox-Button-Click" href="https://sandbox.finnotech.ir/signin" target="_blank">
                    <button class="finno-btn px-5 ">
                      سندباکس
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <!--                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 second-section-sandbox_slogan">-->
            <!--                            <h3 class="pt-2">راهکارهای ساده و نوآورانه مالی و سرمایه‌گذاری برای کسب‌وکارها</h3>-->
            <!--                        </div>-->
          </div>
        </div>
      </div>
    </section>

    <!--   CUSTOMERS  -->
    <section class="third-section">
      <div class="third-section-overlay"></div>
      <div class="third-section-mask"></div>
      <div class="container position-relative">
        <div class="row our-customers">
          <div class="col-lg-12 title-holder mb-5">
            <h2 class="text-center s-25">بانک‌های همکار فینوتک</h2>
            <h4 class="text-center lighter-dark-text-50 lh-24">برای استفاده از سرویس‌های حسابی فینوتک ، باید در یکی از بانک‌های زیر حساب داشته باشید</h4>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5 text-center ">
            <div class="customers-box mx-2" title="بانک ایران زمین">
              <img class="our-customers_img" src="src/img/Iranzamin-logo-LimooGraphic.png"
                   alt="this is a test image">
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5 text-center ">
            <div class="customers-box mx-2" title="بانک آینده">
              <img class="our-customers_img" src="src/img/ayandeh.png" alt="this is a test image">
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5 text-center ">
            <div class="customers-box mx-2" title="بانک اقتصاد نوین">
              <img class="our-customers_img" src="src/img/Eghtesad-logo-LimooGraphic.png"
                   alt="this is a test image">
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5 text-center ">
            <div class="customers-box mx-2" title="بانک سپه">
              <img class="our-customers_img" src="src/img/Sepah-logo-LimooGraphic.png"
                   alt="this is a test image">
            </div>
          </div>
          <div class="col-lg-12 mt-4 pb-4">
            <div class="text-center">
              <a class="GTM-About-Finnotech-Button" href="https://www.finnotech.ir/fa/page/%D8%B4%D8%B1%DA%A9%D8%AA/9" target="_blank">
                <button class="finno-btn py-2 ">
                  <i class="fas fa-arrow-right position-relative"></i>
                  <span class="px-5">درباره فینوتک</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
    export default {
        name: "Landing"
    }
</script>

<style scoped>

</style>
