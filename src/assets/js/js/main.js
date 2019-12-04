(function () {
  'use strict'
  $('#Methods').select2({
    placeholder: 'سرویس های درخواستی',
    dir: 'rtl',
    closeOnSelect: false,
    disabled: true
  })

  // Disable MultiSelect On Checking
  $('#needServices').on('change', function () {
    $('.multi-select-input').prop('disabled', false)
    $('.multi-select-input-multi').prop('disabled', false)
  })

  $('#needGuide').on('change', function () {
    $('.multi-select-input').prop('disabled', true)
    $('.multi-select-input-multi').prop('disabled', true)
    $('#Methods').val(null).trigger('change')
  })

  // Alert Notification
  function NotifyAlert (message, type) {
    var $this = document.getElementById('form-container')
    $($this).html('<div class="alert alert-' + type + '"><a class="close fade show" data-dismiss="alert">×</a><span>' + message + '</span></div>')
    setTimeout(function () {
      $($this).html(' ')
    }, 8000)
  }
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation') // Loop over them and prevent submission
    var services = false
    var guide = false
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        var $this = document.getElementById('FormSubmit')
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault()

          // Validate
          if ($('#needServices').prop('checked')) {
            if ($('#Methods').val().length) {
              services = true
            } else {
              NotifyAlert('حداقل یک سرویس انتخاب کنید.', 'danger')
            }
          } else if ($('#needGuide').prop('checked')) {
            guide = true
          }

          if (services || guide) {
            var multiSelectVals = $('#Methods').val()
            console.log('others', multiSelectVals)
            var formData = {
              'first_name': JSON.stringify(document.getElementById('fullName').value),
              'last_name': '',
              'phone': JSON.stringify(document.getElementById('myPhoneNumber').value),
              'other': JSON.stringify(multiSelectVals)
            }
            $this.disabled = true
            $($this).html(
              `<span class="spinner-border spinner-border-sm py-1" role="status" aria-hidden="true"></span>`
            )
            $.ajax({
              url: 'http://landingapi.finnotech.ir/landing/register',
              type: 'POST',
              data: formData,
              success: function (message) {
                $('.form-container').html('<div class="alert alert-success"><span>درخواست شما با موفقیت ثبت شد و کارشناسان فینوتک به زودی با شما تماس خواهند گرفت</span></div>')
                $('.form-container-inner').hide()
                window.history.replaceState(null, null, '/?success')
              },

              error: function (message) {
                if (message.status === 409) {
                  NotifyAlert('شما قبلا ثبت نام کرده اید', 'danger')
                } else {
                  NotifyAlert('لطفا دوباره تلاش کنید.', 'danger')
                }
                $($this).html(
                  `مشاوره رایگان`
                )
                $this.disabled = false
              }
            })
          }
        }

        form.classList.add('was-validated')
      }, false)
    })
  }, false)
})() // jQuery

// this is a input custom filtermaker , you can add any type of filter that you want.
// Restricts input for the given textbox to the given inputFilter.
function setInputFilter (textbox, inputFilter) {
  ['input', 'keydown', 'keyup', 'mousedown', 'mouseup', 'select', 'contextmenu', 'drop'].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value
        this.oldSelectionStart = this.selectionStart
        this.oldSelectionEnd = this.selectionEnd
      } else if (this.hasOwnProperty('oldValue')) {
        this.value = this.oldValue
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd)
      }
    })
  })
}

// input filter for prevent alphabets to be written
setInputFilter(document.getElementById('myPhoneNumber'), function (value) {
  return /^\d*\.?\d*$/.test(value)
})
setInputFilter(document.getElementById('fullName'), function (value) {
  var isArabic = /^([\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\ufdf0-\ufdfd]|[ ])*$/g
  return isArabic.test(value)
})

// Parallax
$('.first-section-parallarx').paroller()
