$( document ).ready(function() {
    $.ajax({
      url: "./email.json",
      success: function(data) {
        console.log(data[0]);
        var firstname = data[0].firstname;
        var product = data[0].bought_item.related_product;
        var freeshipping = product.free_shipping;
        var name = product.main_name;
        var price = product.main_price;
        var stars = product.main_stars;
        var reviewCount = product.review_number;
        var link = product.main_link;
        var date = product.reviews[0].date;
        var content = product.reviews[0].content;
        var title = product.reviews[0].title;
        var username = product.reviews[0].username;

        var secondName = product.frequently_bought[0].second_name;
        var secondPrice = product.frequently_bought[0].second_price;

        var thirdName = product.frequently_bought[1].third_name;
        var thirdPrice = product.frequently_bought[1].third_price;

        var fourthName = product.frequently_bought[2].fourth_name;
        var fourthPrice = product.frequently_bought[2].fourth_price;

        var source = $('#email-template').html();
        var template = Handlebars.compile(source);
        var context = {firstname: firstname, main_name: name, main_price: price, review_number: reviewCount, date: date, username: username, title: title, content: content, second_name: secondName, second_price: secondPrice, third_name: thirdName, third_price: thirdPrice, fourth_name: fourthName, fourth_price: fourthPrice};
        var newHtml = template(context);
        $('.template').append(newHtml);
      },
      error: function(object, error) {
        console.log(object, error);
      }
    });
});
