(function (global) {

    var dc = {};
    
    var homeHtmlUrl = "snippets/home-snippet.html";
    var allCategoriesUrl =
      "https://davids-restaurant.herokuapp.com/categories.json";
    var categoriesTitleHtml = "snippets/categories-title-snippet.html";
    var categoryHtml = "snippets/category-snippet.html";
    var menuItemsUrl =
      "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
    var menuItemsTitleHtml = "snippets/menu-items-title.html";
    var menuItemHtml = "snippets/menu-item.html";
    
    $ajaxUtils.sendGetRequest(allCategoriesUrl, function (res) {
        console.log(res);
        console.log(res[1].short_name);
        console.log(typeof res);
    }  ,true) 
    
    var myTestString = "myTest";
    dc.myTestString = myTestString;
    global.$dc = dc;
    
    })(window);