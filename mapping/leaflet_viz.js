var prek = { "bounds" : [ [ 40.44276659332215,
        -74.57794189453125
      ],
      [ 40.966418917683285,
        -73.07693481445312
      ]
    ],
  "center" : "[40.70510741061974, -73.82743835449217]",
  "layers" : [ { "id" : "7f50d408-8f17-41d2-8da1-16e0ebd9202c",
        "infowindow" : null,
        "options" : { "base_type" : "gray_roadmap",
            "className" : "gray_roadmap",
            "id" : "7f50d408-8f17-41d2-8da1-16e0ebd9202c",
            "maxZoom" : 40,
            "minZoom" : 0,
            "name" : "GMaps Gray Roadmap",
            "order" : 0,
            "style" : [ { "stylers" : [ { "saturation" : -100 } ] },
                { "featureType" : "water",
                  "stylers" : [ { "gamma" : 1.6699999999999999 },
                      { "lightness" : 27 }
                    ]
                },
                { "elementType" : "geometry",
                  "stylers" : [ { "gamma" : 1.3100000000000001 },
                      { "lightness" : 12 }
                    ]
                },
                { "elementType" : "labels",
                  "featureType" : "administrative",
                  "stylers" : [ { "lightness" : 51 },
                      { "gamma" : 0.93999999999999995 }
                    ]
                },
                {  },
                { "elementType" : "labels",
                  "featureType" : "road",
                  "stylers" : [ { "lightness" : 57 } ]
                },
                { "elementType" : "labels",
                  "featureType" : "poi",
                  "stylers" : [ { "lightness" : 42 } ]
                }
              ],
            "type" : "GMapsBase"
          },
        "order" : 0,
        "type" : "gmapsbase"
      },
      { "options" : { "cdn_url" : { "http" : "api.cartocdn.com",
                "https" : "cartocdn.global.ssl.fastly.net"
              },
            "named_map" : { "layers" : [ { "infowindow" : { "alternative_names" : {  },
                          "fields" : [ { "name" : "boro_text",
                                "position" : 1,
                                "title" : true
                              },
                              { "name" : "cd",
                                "position" : 3,
                                "title" : true
                              },
                              { "name" : "live_births",
                                "position" : 5,
                                "title" : true
                              },
                              { "name" : "neighborhood",
                                "position" : 6,
                                "title" : true
                              }
                            ],
                          "template" : "<div class=\"cartodb-popup\">\n  <a href=\"#close\" class=\"cartodb-popup-close-button close\">x</a>\n  <div class=\"cartodb-popup-content-wrapper\">\n    <div class=\"cartodb-popup-content\">\n      {{#content.fields}}\n        {{#title}}<h4>{{title}}</h4>{{/title}}\n        {{#value}}\n          <p {{#type}}class=\"{{ type }}\"{{/type}}>{{{ value }}}</p>\n        {{/value}}\n        {{^value}}\n          <p class=\"empty\">null</p>\n        {{/value}}\n      {{/content.fields}}\n    </div>\n  </div>\n  <div class=\"cartodb-popup-tip-container\"></div>\n</div>\n",
                          "template_name" : "table/views/infowindow_light"
                        },
                      "interactivity" : "cartodb_id",
                      "layer_name" : "births2010",
                      "legend" : { "items" : [ { "custom_value" : true,
                                "name" : "Left label",
                                "type" : "text",
                                "value" : "500",
                                "visible" : true
                              },
                              { "custom_value" : true,
                                "name" : "Right label",
                                "type" : "text",
                                "value" : "5000+",
                                "visible" : true
                              },
                              { "name" : "Color",
                                "type" : "color",
                                "value" : "#FFFFCC",
                                "visible" : true
                              },
                              { "name" : "Color",
                                "type" : "color",
                                "value" : "#C7E9B4",
                                "visible" : true
                              },
                              { "name" : "Color",
                                "type" : "color",
                                "value" : "#7FCDBB",
                                "visible" : true
                              },
                              { "name" : "Color",
                                "type" : "color",
                                "value" : "#41B6C4",
                                "visible" : true
                              },
                              { "name" : "Color",
                                "type" : "color",
                                "value" : "#1D91C0",
                                "visible" : true
                              },
                              { "name" : "Color",
                                "type" : "color",
                                "value" : "#225EA8",
                                "visible" : true
                              },
                              { "name" : "Color",
                                "type" : "color",
                                "value" : "#0C2C84",
                                "visible" : true
                              }
                            ],
                          "show_title" : true,
                          "template" : "",
                          "title" : "Total Live Births",
                          "type" : "choropleth"
                        }
                    },
                    { "infowindow" : { "alternative_names" : { "code_d" : "District" },
                          "fields" : [ { "name" : "name",
                                "position" : 0,
                                "title" : false
                              },
                              { "name" : "address",
                                "position" : 1,
                                "title" : false
                              },
                              { "name" : "phone",
                                "position" : 2,
                                "title" : false
                              },
                              { "name" : "borough",
                                "position" : 3,
                                "title" : false
                              },
                              { "name" : "code_d",
                                "position" : 4,
                                "title" : true
                              },
                              { "name" : "notes",
                                "position" : 5,
                                "title" : false
                              }
                            ],
                          "template" : "<div class=\"cartodb-popup header yellow\">\n  <a href=\"#close\" class=\"cartodb-popup-close-button close\">x</a>\n  <div class=\"cartodb-popup-header\">\n    {{#content.fields}}\n      {{^index}}\n        {{#title}}<h4>{{title}}</h4>{{/title}}\n        {{#value}}\n          <h1 {{#type}}class=\"{{ type }}\"{{/type}}>{{{ value }}}</h1>\n        {{/value}}\n        {{^value}}\n          <h1 class=\"empty\">null</h1>\n        {{/value}}\n        <span class=\"separator\"></span>\n      {{/index}}\n    {{/content.fields}}\n  </div>\n  <div class=\"cartodb-popup-content-wrapper\">\n    <div class=\"cartodb-popup-content\">\n      {{#content.fields}}\n        {{#index}}\n          {{#title}}<h4>{{title}}</h4>{{/title}}\n          {{#value}}\n            <p>{{{ value }}}</p>\n          {{/value}}\n          {{^value}}\n            <p class=\"empty\">null</p>\n          {{/value}}\n        {{/index}}\n      {{/content.fields}}\n    </div>\n  </div>\n  <div class=\"cartodb-popup-tip-container\">\n  </div>\n</div>",
                          "template_name" : "infowindow_light_header_yellow"
                        },
                      "interactivity" : "cartodb_id",
                      "layer_name" : "pre_k_sites_citywide",
                      "legend" : { "items" : [ { "name" : "CBO",
                                "value" : "#055D00",
                                "visible" : true
                              },
                              { "name" : "School Based",
                                "value" : "#FFCC00",
                                "visible" : true
                              }
                            ],
                          "show_title" : false,
                          "template" : "",
                          "title" : "",
                          "type" : "category"
                        }
                    }
                  ],
                "name" : "tpl_123beae6_c7e8_11e3_9366_0e10bcd91c2b",
                "params" : { "layer0" : 1,
                    "layer1" : 1
                  }
              },
            "tiler_domain" : "cartodb.com",
            "tiler_port" : "80",
            "tiler_protocol" : "http",
            "type" : "namedmap",
            "user_name" : "cunydata"
          },
        "order" : 1,
        "type" : "namedmap"
      }
    ],
  "map_provider" : "googlemaps",
  "overlays" : [ { "options" : null,
        "order" : null,
        "template" : "<a class=\"zoom_in\">+</a><a class=\"zoom_out\">-</a>",
        "type" : "zoom"
      },
      { "options" : null,
        "order" : null,
        "template" : "<div class=\"loader\"></div>",
        "type" : "loader"
      }
    ],
  "title" : "Births Overlay",
  "updated_at" : "2014-04-19T19:50:24+00:00",
  "url" : null,
  "version" : "0.1.0",
  "zoom" : 10
}
