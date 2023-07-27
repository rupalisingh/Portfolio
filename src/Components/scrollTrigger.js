export function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
      addObserver(el, options)
    })
  }
  function addObserver(el, options) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          if(options.cb) {
            options.cb(el)
          } else{
            entry.target.classList.toggle("active",entry.isIntersecting)
           
          }
          observer.unobserve(entry.target)
        }
      })
    }, options)
    observer.observe(el)
  }