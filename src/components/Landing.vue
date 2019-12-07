<template>
  <main>
    <div class="main-container">
         <!--   TOP   -->
        <section class="first-section first-section-parallarx"
        :style="{'background-image': 'url(' + require('../assets/img/hero.jpg') + ')'}"
                 data-paroller-factor="0.7">
            <div class="first-section-overlay"></div>
            <div class="first-section-mask"></div>
            <div class="parallax-inner">
                <div class="header-logo container rtl">
                    <a class="GTM-Header-Logo" href="https://www.finnotech.ir" target="_blank">
                        <img src="@/assets/img/0-03.png" alt="finnotech">
                    </a>
                </div>
                <div class="container">
                    <div class="row rtl">
                        <!-- ====================== Begins Finotech Descriptions ====================== -->
                        <div class="col-lg-7 col-md-6 col-ms-12 first-section_paragraph rtl">
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
                        <!-- ====================== Ends Finotech Descriptions ====================== -->
                        <!-- ====================== Begins Form ====================== -->
                        <div class="col-lg-5 col-md-6 col-ms-12 pb-3">
                            <div class="form-container">
                                <div class="form-container-inner rtl">
                                    <h2 class="mb-3 s-18">فرم استعلام شماره حساب</h2>
                                    <div>
                                        <form class="needs-validation register-form">
                                            <!-- Card Number -->
                                            <div class="form-group mb-3">
                                                <div class="col-xs-12 rtl iban-title">
                                                    <label for="">شماره کارت</label>
                                                </div>
                                                <div class="col-xs-12 iban-holder">
                                                    <input type="text" id="fullName" class="form-control" placeholder=" "
                                                           required maxlength="4"
                                                           v-model="cardSections[0]"
                                                           v-on:keyup="checkMaxLengthReached($event,false)">

                                                    <input type="text" id="fullName" class="form-control" placeholder=" "
                                                    required maxlength="4"
                                                    v-model="cardSections[1]"
                                                    v-on:keyup="checkMaxLengthReached($event,false)">

                                                    <input type="text" id="fullName" class="form-control" placeholder=" "
                                                    required maxlength="4"
                                                    v-model="cardSections[2]"
                                                    v-on:keyup="checkMaxLengthReached($event,false)">

                                                    <input type="text" id="fullName" class="form-control" placeholder=" "
                                                    required maxlength="4"
                                                    v-model="cardSections[3]"
                                                    v-on:keyup="checkMaxLengthReached($event,true)">
                                                </div>
                                                <div class="col-xs-12 mt-2">
                                                    <p v-if="hasErr">{{msg}}</p>
                                                </div>
                                            </div>
                                            <div class="my-2" id="form-container"></div>
                                            <button class="GTM-Form-Button finno-btn mb-2 btn-lg btn-block finno-btn mb-2 btn-lg btn-block" id="FormSubmit" @click="triggerInquirey"> استعلام
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ====================== Ends Form ====================== -->
                    </div>
                </div>
            </div>
            <div class="icon-scroll"></div>
        </section>
        <!--    FOOTER   -->
<footer>
    <section class="footer-section">
        <div class="container">
            <div class="row rtl">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 rtl">
                    <ul class="list-unstyled">
                        <li><h4 class="d-inline-block">ارتباط با فینوتک :</h4></li>
                        <li class="w-75">
                            <p class="d-inline-block font-weight-lighter text-justify">
                                تهران، میدان ونک، بزرگراه شهید حقانی، بعد از چهارراه جهان کودک، خیابان شهیدی، خیابان
                                کمان غربی، پلاک 16، مجتمع نوآوری کمان، طبقه پنجم
                            </p>
                        </li>
                        <li>
                            <h4 class="d-inline-block">
                                تلفن :
                            </h4>
                            <p class="d-inline-block font-weight-lighter">02142719500</p>
                        </li>
                        <li>
                            <h4 class="d-inline-block">
                                ایمیل :
                            </h4>
                            <a class="d-inline-block font-weight-lighter"
                               href="mailto:info@finnotech.ir" target="_blank">info@finnotech.ir</a>
                        </li>
                        <li class="mt-4">
                            <h4 class="color-white text-right font-weight-light s-11">
                                © کلیه حقوق این وب‌سایت برای شرکت فین‌وتک پارس محفوظ است.
                            </h4>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="col-lg-12 text-center mb-3">
                        <img class="finnotech-logo" src="@/assets/img/0-03.png" alt="">
                    </div>
                    <div class="col-lg-12 footer-socials row text-center">
                        <ul class="list-unstyled d-inline w-100">
                            <li class="d-inline mx-2">
                                <a href="https://twitter.com/finnotech_ir" target="_blank"><img src="@/assets/img/twitter.png"
                                                                                alt=""></a>
                            </li>
                            <li class="d-inline mx-2">
                                <a href="https://www.linkedin.com/company/finnotech-ir" target="_blank"><img
                                        src="@/assets/img/linkedin.png"
                                        alt=""></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <div class="second-footer p-2 font-weight-normal">

            </div>
        </div>
    </section>
</footer>
    </div>
  </main>
</template>
<script>
import service from '@/services/generalService'
export default {
    name: "Landing",
    data () {
        return {
            card: '',
            cardSections: [],
            client: 12345,
            deposit: '',
            hasErr: false,
            msg: 'خطایی رخ داده است'
        }
    },
    methods: {
        checkMaxLengthReached (event, islast) {
            if (event.target.value.length == 4) {
                if (islast) {
                    this.card = this.cardSections.join('')
                    console.log(this.card)
                    this.triggerInquirey()
                } else {
                    event.target.nextElementSibling.focus()    
                }
            }
        },
        triggerInquirey () {
            service.getMethod(`facility/v2/clients/${this.client}/cardToDeposit?card=${this.card}`)
                .then(response => {
                  this.deposit = response
                  this.hasErr = true
                  if (response.status === 'DONE') {
                    if (response.result.result === 0) {
                        this.msg = response.result.deposit
                    } else {
                        this.msg = response.result.description
                    }
                  }
                }).catch(err => {
                    this.hasErr = true
                    this.msg = 'خطایی رخ داده است'
                })
        }
    }
};
</script>

<style scoped>
  .st0{stroke:#000000;stroke-miterlimit:10;}
  .st0 {
    stroke: #000000;
    stroke-miterlimit: 10;
  }
  .iban-holder > input {
    width: 22%;
    direction: ltr;
  }
  .iban-holder {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
</style>
