// Small interactions: current year, booking CTA smooth scroll, placeholder for booking widget integration
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior: 'smooth', block:'start'});
      }
    });
  });

  // Update phone/whatsapp links once translations load if needed
  // (Place user-provided phone number here programmatically if you prefer)
  const phone = '+216000000000'; // replace programmatically when you provide real number
  const phoneLink = document.getElementById('phoneLink');
  const whatsappLink = document.getElementById('whatsappLink');
  if(phoneLink) phoneLink.setAttribute('href', `tel:${phone}`);
  if(whatsappLink) whatsappLink.setAttribute('href', `https://wa.me/${phone.replace(/\D/g,'')}`);
});
