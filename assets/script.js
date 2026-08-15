document.querySelectorAll('[data-menu]').forEach(function (button) {
  button.addEventListener('click', function () {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('open');
    document.body.classList.toggle('menu-open');
    button.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
});

document.querySelectorAll('.nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelector('.nav')?.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

document.querySelectorAll('[data-year]').forEach(function (node) {
  node.textContent = new Date().getFullYear();
});

(function preserveCampaignAttribution() {
  var trackingKeys = [
    'subid', 'subid2', 'subid3', 'subid4', 'pubid',
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'
  ];

  try {
    var query = new URLSearchParams(window.location.search);

    trackingKeys.forEach(function (key) {
      var incomingValue = query.get(key);
      if (incomingValue) sessionStorage.setItem('aeris_' + key, incomingValue);
    });

    var orderForm = document.querySelector('form.tm-order-form');
    if (!orderForm) return;

    trackingKeys.forEach(function (key) {
      var value = query.get(key) || sessionStorage.getItem('aeris_' + key);
      if (!value) return;

      var field = orderForm.elements.namedItem(key);
      if (!field) {
        field = document.createElement('input');
        field.type = 'hidden';
        field.name = key;
        orderForm.appendChild(field);
      }
      field.value = value;
    });
  } catch (error) {
    // The checkout remains usable when storage is disabled by the browser.
  }
})();

var checkoutForm = document.querySelector('#orderForm');
if (checkoutForm) {
  checkoutForm.addEventListener('submit', function () {
    try {
      sessionStorage.setItem('aeris_order_submitted', '1');
      sessionStorage.removeItem('aeris_purchase_sent');
    } catch (error) {
      // Submission continues normally when storage is unavailable.
    }
  });
}
