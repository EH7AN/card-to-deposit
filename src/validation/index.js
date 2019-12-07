import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import fa from 'vee-validate/dist/locale/fa'
const dictionary = {
  fa: {
    attributes: {
      email: 'ایمیل',
      firstName: 'نام',
      lastName: 'نام خانوادگی',
      birthCertNumber: 'شماره شناسنامه',
      issuingCity: 'محل صدور',
      birthCertSerial: 'سریال شناسنامه',
      fatherName: 'نام پدر',
      nationalId: 'کد ملی',
      phoneNumber: 'شماره تماس',
      mobileNumber: 'شماره موبایل',
      postalCode: 'کد پستی',
      bankName: 'نام بانک',
      ibanNumber: 'شماره شبا',
      accountNumber: 'شماره حساب',
      image: 'تصویر شما',
      birthCertPhoto: 'این تصویر',
      birthCertDescPhoto: 'این تصویر',
      birth: 'تاریخ تولد',
      nationalCardPhoto: 'تصویر کارت ملی',
      price: 'مبلغ',
      gender: 'جنسیت',
      acountType: 'نوع حساب',
      profilePhoto: 'عکس پروفایل'
    }
  }
}
Vue.use(VeeValidate, {
  events: 'change|blur'
})
Validator.localize(dictionary)
Validator.localize('fa', fa)
Validator.extend('phoneNumberFa', {
  validate (value) {
    return /^0[1-8]{2}[0-9]{8}$/g.test(value)
  }
})
Validator.extend('mobileFa', {
  validate (value) {
    return /^09[0-9]{9}$/g.test(value)
  }
})
Validator.extend('nationalCode', {
  validate (value) {
    return isValidIranianNationalCode(value)
    function isValidIranianNationalCode (input) {
      if (!/^\d{10}$/.test(input)) {
        return false
      }
      let check = parseInt(input[9])
      let sum = 0
      let i
      for (i = 0; i < 9; ++i) {
        sum += parseInt(input[i]) * (10 - i)
      }
      sum %= 11
      return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11)
    }
  }
})
