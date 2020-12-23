// SKATE
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

// Snow
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

// SURF

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
