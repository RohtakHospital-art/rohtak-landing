// script.js - minimal client behavior for landing page

document.addEventListener('DOMContentLoaded', function(){
  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // lower -> faster

  const runCounter = (el) => {
    const target = +el.getAttribute('data-target') || +el.textContent.replace(/[^0-9]/g,'');
    let count = 0;
    const step = Math.ceil(target / speed);
    const update = () => {
      count += step;
      if(count >= target){
        el.textContent = target + (target >= 1000 ? '+' : '');
      } else {
        el.textContent = count;
        requestAnimationFrame(update);
      }
    };
    update();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        runCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.6});

  counters.forEach(c => observer.observe(c));

  // Back to top
  const topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300){ topBtn.style.display = 'flex'; } else { topBtn.style.display = 'none'; }
  });
  topBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

  // Appointment form handling (optional)
  const form = document.getElementById('appointmentForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // If you have a real endpoint, set `form.action` to it and allow normal submission.
      const formAction = form.getAttribute('action') || '';
      if(formAction && formAction !== '#'){
        // attempt to submit via fetch
        const data = new FormData(form);
        fetch(formAction, {method: form.method || 'POST', body: data})
          .then(res => {
            if(res.ok){ alert('Thank you — your appointment request was submitted.'); form.reset(); }
            else { alert('Submission failed. Please try again later.'); }
          }).catch(() => alert('Submission failed. Please try again later.'));
      } else {
        // No backend configured — show a simple confirmation.
        alert('This is a demo form. To enable submissions, set the form `action` attribute to your form endpoint or use Formspree/Netlify Forms.');
        form.reset();
      }
    });
  }
});
