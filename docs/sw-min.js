const VERSION="v1",CACHE_NAME="JWAX-v1",urlsToCache=["/","/index.html","/jwax.wtf/","/jwax.wtf/FAQ.html","/jwax.wtf/Returnandrefundpolicy.html","/jwax.wtf/_double_pack_skate_wax_savosin.html","/jwax.wtf/about.html","/jwax.wtf/accessories-products.html","/jwax.wtf/caps.html","/jwax.wtf/cdn-cgi/l/email-protection","/jwax.wtf/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js","/jwax.wtf/cdn-cgi/styles/cf.errors.css","/jwax.wtf/contact.html","/jwax.wtf/css/cookieconsent.css","/jwax.wtf/css/main.css","/jwax.wtf/cuffed_beanies.html","/jwax.wtf/deals-products.html","/jwax.wtf/double_pack_skate_wax.html","/jwax.wtf/double_pack_skate_wax_savosin.html","/jwax.wtf/double_pack_snow_wax.html","/jwax.wtf/double_pack_surf_wax.html","/jwax.wtf/double_skate_wax_&_cuffed_beanie.html","/jwax.wtf/double_skate_wax_&_skate_beanie.html","/jwax.wtf/giftcards-products.html","/jwax.wtf/giftcardspolicy.html","/jwax.wtf/img/JWAX-skate-wax.gif","/jwax.wtf/img/home-images/skate-wax.png","/jwax.wtf/img/home-images/snow-wax.png","/jwax.wtf/img/home-images/surf-wax.png","/jwax.wtf/img/jwax-team-bmx.gif","/jwax.wtf/img/jwax-team-rollerblading.gif","/jwax.wtf/img/jwax-team-scoot.gif","/jwax.wtf/img/jwax-team-skate.gif","/jwax.wtf/img/logo_b.svg","/jwax.wtf/img/products/caps/caps-1.png","/jwax.wtf/img/products/caps/caps-2.png","/jwax.wtf/img/products/caps/caps-3.png","/jwax.wtf/img/products/caps/caps-4.png","/jwax.wtf/img/products/caps/caps-5.png","/jwax.wtf/img/products/caps/caps-6.png","/jwax.wtf/img/products/caps/dad-caps-1.png","/jwax.wtf/img/products/caps/dad-caps-2.png","/jwax.wtf/img/products/caps/dad-caps-3.png","/jwax.wtf/img/products/caps/dad-caps-4.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-1.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-10.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-11.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-12.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-13.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-14.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-15.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-16.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-2.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-3.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-4.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-5.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-6.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-7.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-8.png","/jwax.wtf/img/products/cuffed-beanie/cuffed-beanie-9.png","/jwax.wtf/img/products/deals/double_skate_wax_&_cuffed_beanie_blue.png","/jwax.wtf/img/products/deals/double_skate_wax_&_cuffed_beanie_burgundyred.png","/jwax.wtf/img/products/deals/double_skate_wax_&_cuffed_beanie_classicred.png","/jwax.wtf/img/products/deals/double_skate_wax_&_cuffed_beanie_darkgray.png","/jwax.wtf/img/products/deals/double_skate_wax_&_cuffed_beanie_graphite.png","/jwax.wtf/img/products/deals/double_skate_wax_&_cuffed_beanie_lightgray.png","/jwax.wtf/img/products/deals/double_skate_wax_&_cuffed_beanie_orange.png","/jwax.wtf/img/products/deals/double_skate_wax_&_cuffed_beanie_pink.png","/jwax.wtf/img/products/deals/double_skate_wax_&_skate_beanie_dark.png","/jwax.wtf/img/products/deals/double_skate_wax_&_skate_beanie_light.png","/jwax.wtf/img/products/deals/savosin_double_skate_wax_&_cuffed_beanie_blue.png","/jwax.wtf/img/products/deals/savosin_double_skate_wax_&_cuffed_beanie_burgundyred.png","/jwax.wtf/img/products/deals/savosin_double_skate_wax_&_cuffed_beanie_classicred.png","/jwax.wtf/img/products/deals/savosin_double_skate_wax_&_cuffed_beanie_darkgray.png","/jwax.wtf/img/products/deals/savosin_double_skate_wax_&_cuffed_beanie_graphite.png","/jwax.wtf/img/products/deals/savosin_double_skate_wax_&_cuffed_beanie_lightgray.png","/jwax.wtf/img/products/deals/savosin_double_skate_wax_&_cuffed_beanie_orange.png","/jwax.wtf/img/products/deals/savosin_double_skate_wax_&_cuffed_beanie_pink.png","/jwax.wtf/img/products/deals/savosin_single_skate_wax_&_skate_beanie_dark.png","/jwax.wtf/img/products/deals/savosin_single_skate_wax_&_skate_beanie_light.png","/jwax.wtf/img/products/deals/single_skate_wax_&_cuffed_beanie_blue.png","/jwax.wtf/img/products/deals/single_skate_wax_&_cuffed_beanie_burgundyred.png","/jwax.wtf/img/products/deals/single_skate_wax_&_cuffed_beanie_classicred.png","/jwax.wtf/img/products/deals/single_skate_wax_&_cuffed_beanie_darkgray.png","/jwax.wtf/img/products/deals/single_skate_wax_&_cuffed_beanie_graphite.png","/jwax.wtf/img/products/deals/single_skate_wax_&_cuffed_beanie_lightgray.png","/jwax.wtf/img/products/deals/single_skate_wax_&_cuffed_beanie_orange.png","/jwax.wtf/img/products/deals/single_skate_wax_&_cuffed_beanie_pink.png","/jwax.wtf/img/products/deals/single_skate_wax_&_skate_beanie_dark.png","/jwax.wtf/img/products/deals/single_skate_wax_&_skate_beanie_light.png","/jwax.wtf/img/products/deals/snow_single_wax_&_cuffed_beanie_blue.png","/jwax.wtf/img/products/deals/snow_single_wax_&_cuffed_beanie_burgundyred.png","/jwax.wtf/img/products/deals/snow_single_wax_&_cuffed_beanie_classicred.png","/jwax.wtf/img/products/deals/snow_single_wax_&_cuffed_beanie_darkgray.png","/jwax.wtf/img/products/deals/snow_single_wax_&_cuffed_beanie_graphite.png","/jwax.wtf/img/products/deals/snow_single_wax_&_cuffed_beanie_lightgray.png","/jwax.wtf/img/products/deals/snow_single_wax_&_cuffed_beanie_orange.png","/jwax.wtf/img/products/deals/snow_single_wax_&_cuffed_beanie_pink.png","/jwax.wtf/img/products/deals/snow_single_wax_&_skate_beanie_dark.png","/jwax.wtf/img/products/deals/snow_single_wax_&_skate_beanie_light.png","/jwax.wtf/img/products/skate-wax/skate-wax-double-pack-wax.png","/jwax.wtf/img/products/skate-wax/skate-wax-double-pack.png","/jwax.wtf/img/products/skate-wax/skate-wax-savosin-pro-double-pack-img.png","/jwax.wtf/img/products/skate-wax/skate-wax-savosin-pro-double-pack-wax.png","/jwax.wtf/img/products/skate-wax/skate-wax-savosin-pro-double-pack.png","/jwax.wtf/img/products/skate-wax/skate-wax-savosin-pro-single-pack-img.png","/jwax.wtf/img/products/skate-wax/skate-wax-savosin-pro-single-pack-wax.png","/jwax.wtf/img/products/skate-wax/skate-wax-savosin-pro-single-pack.png","/jwax.wtf/img/products/skate-wax/skate-wax-single-pack-wax.png","/jwax.wtf/img/products/skate-wax/skate-wax-single-pack.png","/jwax.wtf/img/products/snow-wax/snow-wax-double-pack-wax.png","/jwax.wtf/img/products/snow-wax/snow-wax-double-pack.png","/jwax.wtf/img/products/snow-wax/snow-wax-single-pack-wax.png","/jwax.wtf/img/products/snow-wax/snow-wax-single-pack.png","/jwax.wtf/img/products/surf-wax/surf-wax-double-pack-wax.png","/jwax.wtf/img/products/surf-wax/surf-wax-double-pack.png","/jwax.wtf/img/products/surf-wax/surf-wax-single-pack-wax.png","/jwax.wtf/img/products/surf-wax/surf-wax-single-pack.png","/jwax.wtf/img/products/t-shirts/pattern-tshirt-detail.png","/jwax.wtf/img/products/t-shirts/pattern-tshirt.png","/jwax.wtf/img/products/thumbs/caps.png","/jwax.wtf/img/products/thumbs/cuffed-beanis.png","/jwax.wtf/img/products/thumbs/dad-caps.png","/jwax.wtf/img/products/thumbs/deals/double_skate_wax_&_cuffed_beanie_thumb.png","/jwax.wtf/img/products/thumbs/deals/double_skate_wax_&_skate_beanie_thumb.png","/jwax.wtf/img/products/thumbs/deals/savosin_double_skate_wax_&_cuffed_beanie_thumb.png","/jwax.wtf/img/products/thumbs/deals/savosin_single_skate_wax_&_skate_beanie_thumb.png","/jwax.wtf/img/products/thumbs/deals/single_skate_wax_&_cuffed_beanie_thumb.png","/jwax.wtf/img/products/thumbs/deals/single_skate_wax_&_skate_beanie_thumb.png","/jwax.wtf/img/products/thumbs/deals/snow_single_wax_&_cuffed_beanie_thumb.png","/jwax.wtf/img/products/thumbs/deals/snow_single_wax_&_skate_beanie_thumb.png","/jwax.wtf/img/products/thumbs/giftcards/giftcard_20.png","/jwax.wtf/img/products/thumbs/giftcards/giftcard_40.png","/jwax.wtf/img/products/thumbs/giftcards/giftcard_50.png","/jwax.wtf/img/products/thumbs/pattern-tshirt.png","/jwax.wtf/img/products/thumbs/skate-wax-double-pack.png","/jwax.wtf/img/products/thumbs/skate-wax-savosin-pro-double-pack.png","/jwax.wtf/img/products/thumbs/skate-wax-savosin-pro-single-pack.png","/jwax.wtf/img/products/thumbs/skate-wax-single-pack.png","/jwax.wtf/img/products/thumbs/snow-wax-double-pack.png","/jwax.wtf/img/products/thumbs/snow-wax-single-pack.png","/jwax.wtf/img/products/thumbs/surf-wax-double-pack.png","/jwax.wtf/img/products/thumbs/surf-wax-single-pack.png","/jwax.wtf/img/products/thumbs/winter-skate-beanies.png","/jwax.wtf/img/products/winter-skate-beanie/winter-skate-beanies-1.png","/jwax.wtf/img/products/winter-skate-beanie/winter-skate-beanies-2.png","/jwax.wtf/img/products/winter-skate-beanie/winter-skate-beanies-3.png","/jwax.wtf/img/products/winter-skate-beanie/winter-skate-beanies-4.png","/jwax.wtf/img/team/Alberto_Chakalov.png","/jwax.wtf/img/team/Atanas_Atanasov.png","/jwax.wtf/img/team/Evgeniy_Penkov.png","/jwax.wtf/img/team/Grigor_Grigorov.png","/jwax.wtf/img/team/Hristo_Iliev.png","/jwax.wtf/img/team/Ilia_Savosin.png","/jwax.wtf/img/team/Iliyan_Hriskov.png","/jwax.wtf/img/team/Kaloian_Trenkov.png","/jwax.wtf/img/team/Kate_Bedrata.jpg","/jwax.wtf/img/team/Kristian_Dimitrov.png","/jwax.wtf/img/team/Ralitsa_Chimshirova.png","/jwax.wtf/img/team/Rusen_Minchev.png","/jwax.wtf/img/team/Sorin_Coseraru.png","/jwax.wtf/img/team/Viktor_Pentchev.png","/jwax.wtf/js/collapsible-min.js","/jwax.wtf/js/cookieconsent-init-min.js","/jwax.wtf/js/cookieconsent-min.js","/jwax.wtf/js/form-min.js","/jwax.wtf/js/modal-min.js","/jwax.wtf/js/nav-min.js","/jwax.wtf/js/slick.min-min.js","/jwax.wtf/privacypolicy.html","/jwax.wtf/products.html","/jwax.wtf/savosin_double_skate_wax_&_cuffed_beanie.html","/jwax.wtf/savosin_single_skate_wax_&_skate_beanie.html","/jwax.wtf/shippingpolicy.html","/jwax.wtf/single_pack_skate_wax.html","/jwax.wtf/single_pack_skate_wax_savosin.html","/jwax.wtf/single_pack_snow_wax.html","/jwax.wtf/single_pack_surf_wax.html","/jwax.wtf/single_skate_wax_&_cuffed_beanie.html","/jwax.wtf/single_skate_wax_&_skate_beanie.html","/jwax.wtf/skate_caps.html","/jwax.wtf/skatewax-products.html","/jwax.wtf/ski&snowboardwax-products.html","/jwax.wtf/snow_single_wax_&_cuffed_beanie.html","/jwax.wtf/snow_single_wax_&_skate_beanie.html","/jwax.wtf/surfwax-products.html","/jwax.wtf/t-shirt.html","/jwax.wtf/team.html","/jwax.wtf/termsofuse.html","/jwax.wtf/winter_skate_beanies.html"];self.addEventListener("install",(function(a){a.waitUntil(caches.open("JWAX-v1").then((function(a){return a.addAll(urlsToCache)})))})),self.addEventListener("fetch",(function(a){a.respondWith(caches.match(a.request).then((function(e){return e||fetch(a.request)})))}));
//# sourceMappingURL=sw-min.js.map