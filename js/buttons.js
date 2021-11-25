// SKATE Single
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6137509150906',
        node: document.getElementById('product-component-1608699394284'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "24px",
        "padding-right": "24px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

// Snow Single
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6137504923834',
        node: document.getElementById('product-component-1608700217782'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "24px",
        "padding-right": "24px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

// SURF Single

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6137509281978',
        node: document.getElementById('product-component-1608700360858'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616",
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "24px",
        "padding-right": "24px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


//SAVOSIN SINGLE

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6863564996794',
        node: document.getElementById('product-component-1631973081405'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/



//TEE


/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6169853919418',
        node: document.getElementById('product-component-1610490395721'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "24px",
        "padding-right": "24px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


//T-shir + OG wax


/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6169874202810',
        node: document.getElementById('product-component-1610490848091'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "24px",
        "padding-right": "24px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


// T-shirt + skate wax

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6641637687482',
        node: document.getElementById('product-component-1620217732134'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


// OG skate waxed

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6641636409530',
        node: document.getElementById('product-component-1620218699637'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


// SKATE wax double

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6641639260346',
        node: document.getElementById('product-component-1620218998577'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


//SNOW double pack

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6641640079546',
        node: document.getElementById('product-component-1620219197906'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


//SURF double pack

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6641641685178',
        node: document.getElementById('product-component-1620219436591'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


// SAVOSIN double

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6863566143674',
        node: document.getElementById('product-component-1631973119082'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#F41616"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/



// BLACK FRIDAY

//3 x Skate

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6944152256698',
        node: document.getElementById('product-component-1637871578706'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#9f0000"
        },
        "background-color": "#F41616",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#F41616",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

// 7x skate

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6944153698490',
        node: document.getElementById('product-component-1637871962705'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#9f0000"
        },
        "background-color": "#F41616",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


//9 x SKATE

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6944154353850',
        node: document.getElementById('product-component-1637872191572'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#9f0000"
        },
        "background-color": "#F41616",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


// 3 x SAVOSIN

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6944189874362',
        node: document.getElementById('product-component-1637872333672'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#9f0000"
        },
        "background-color": "#F41616",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

//5 x SAVOSIN

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6944191316154',
        node: document.getElementById('product-component-1637872449717'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#9f0000"
        },
        "background-color": "#F41616",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

// 6 x SAVOSIN

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6944192594106',
        node: document.getElementById('product-component-1637872614516'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#9f0000"
        },
        "background-color": "#F41616",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


//Snow x Skate

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6944193478842',
        node: document.getElementById('product-component-1637872712205'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#9f0000"
        },
        "background-color": "#F41616",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

// TEE

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6944194953402',
        node: document.getElementById('product-component-1637872985198'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#9f0000"
        },
        "background-color": "#F41616",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

//tee x single

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6944196755642',
        node: document.getElementById('product-component-1637873105064'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#9f0000"
        },
        "background-color": "#F41616",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

//tee x double packs

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jwax.myshopify.com',
      storefrontAccessToken: '6d47143e0fa2d2f0bd425adfced5dc38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6944198361274',
        node: document.getElementById('product-component-1637873218488'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#9f0000"
        },
        "background-color": "#F41616",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "GRAB NOW"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px",
        "padding-left": "38px",
        "padding-right": "38px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        "background-color": "#1a1a1a",
        ":focus": {
          "background-color": "#2c2c2c"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "header": {
        "color": "#1a1a1a"
      },
      "lineItems": {
        "color": "#1a1a1a"
      },
      "subtotalText": {
        "color": "#1a1a1a"
      },
      "subtotal": {
        "color": "#1a1a1a"
      },
      "notice": {
        "color": "#1a1a1a"
      },
      "currency": {
        "color": "#1a1a1a"
      },
      "close": {
        "color": "#1a1a1a",
        ":hover": {
          "color": "#1a1a1a"
        }
      },
      "empty": {
        "color": "#1a1a1a"
      },
      "noteDescription": {
        "color": "#1a1a1a"
      },
      "discountText": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "discountAmount": {
        "color": "#1a1a1a"
      }
    },
    "text": {
      "total": "Subtotal"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#1a1a1a",
        ":hover": {
          "background-color": "#2c2c2c"
        },
        ":focus": {
          "background-color": "#2c2c2c"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#1a1a1a"
      },
      "title": {
        "color": "#1a1a1a"
      },
      "price": {
        "color": "#1a1a1a"
      },
      "fullPrice": {
        "color": "#1a1a1a"
      },
      "discount": {
        "color": "#1a1a1a"
      },
      "discountIcon": {
        "fill": "#1a1a1a"
      },
      "quantity": {
        "color": "#1a1a1a"
      },
      "quantityIncrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityDecrement": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      },
      "quantityInput": {
        "color": "#1a1a1a",
        "border-color": "#1a1a1a"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
