
$(document).ready(function () {
    const database = firebase.database();
    const beforeQuery = database.ref('menu/')

    /************* */

    const notifications = (message) => {
        if (message == 'fillall') {
            $('.fillall').fadeIn(1000);

            setTimeout(function () {
                $('.fillall').fadeOut(1000);
            }, 3500);
        }

        if (message == 'inserted successfully') {
            $('.inserted').fadeIn(1000);

            setTimeout(function () {
                $('.inserted').fadeOut(1000);
            }, 3500);
        }

        if (message == 'updated') {
            $('.updated').fadeIn(1000);

            setTimeout(function () {
                $('.updated').fadeOut(1000);
            }, 3500);
        }
    }

    /******************** */
    $('[name=submit]').click(function (e) {
        e.preventDefault();

        const category = $('[name=category]').val(),
            title = $('[name=title]').val(),
            price = $('[name=price]').val(),
            price2 = $('[name=price2]').val(),
            price3 = $('[name=price3]').val(),

            comint = $('[name=comint]').val(),
            time = $('[name=time]').val(),
            image = $('[name=image]').val().slice(12),
            newid = beforeQuery.push();
        /*console.log(category)
        console.log(title)
        console.log(price)
        console.log(image)
        console.log(image)*/
        if (!title || !price || !image) {
            notifications('fillall');
        } else {
            newid.set({
                category: category,
                title: title,
                price: price,
                price2: price2,
                price3: price3,

                comint: comint,
                time: time,
                image: "https://firebasestorage.googleapis.com/v0/b/bobasys.appspot.com/o/" + image + "?alt=media"
            },
                function (error) {
                    if (!error) {
                        notifications("inserted successfully");
                        $('[name=title]').val("");
                        $('[name=price]').val("");
                        $('[name=price2]').val("");
                        $('[name=price3]').val("");

                        $('[name=image]').val("");
                        $('[name=comint]').val("");
                        $('[name=time]').val("");
                    }
                    else {
                        console.log('Not Saved');
                    }

                });
        }
    });


    beforeQuery.on('value', function success(data) {
        if (data) {
            let
                category1 = '',
                category2 = '',
                category3 = '',
                category4 = '',
                category5 = '',
                category6 = '';

            $.each(data.val(), function (key, value) {
                let id = key,
                    category = value['category'],
                    title = value['title'],
                    price = value['price'],
                    price2 = value['price2'],
                    price3 = value['price3'],

                    image = value['image'];
                if (category == 'category1') {
                    category1 += `<div class="product-box">
                        <div id= ${key}>
                        <img class="image" style="width: 50px;" src=${image}>
                        <img class="title">${title}</div><hr>
                        <div class="price">${parseFloat(price).toFixed(2)} ??</div><hr>
                        <div class="price2">${parseFloat(price2).toFixed(2)} ??</div><hr>
                        <div class="price3">${parseFloat(price3).toFixed(2)} ??</div><hr>
    
                        <div data-id=${key} class="delete">del</div>
                        </div>
                        </div>
                              `;
                } else if (category == 'category2') {
                    category2 += `<div class="product-box">
                        <div id= ${key}>
                        <img class="image" style="width: 50px;" src=${image}>
                        <img class="title">${title}</div><hr>
                        <div class="price">${parseFloat(price).toFixed(2)} ??</div><hr>
                        <div class="price2">${parseFloat(price2).toFixed(2)} ??</div><hr>
                        <div class="price3">${parseFloat(price3).toFixed(2)} ??</div><hr>
    
                        <div data-id=${key} class="delete">del</div>
                        </div>
                        </div>
                              `;
                } else if (category == 'category3') {
                    category3 += `<div class="product-box">
                        <div id= ${key}>
                        <img class="image" style="width: 50px;" src=${image}>
                        <img class="title">${title}</div><hr>
                        <div class="price">${parseFloat(price).toFixed(2)} ??</div><hr>
                        <div class="price2">${parseFloat(price2).toFixed(2)} ??</div><hr>
                        <div class="price3">${parseFloat(price3).toFixed(2)} ??</div><hr>
    
                        <div data-id=${key} class="delete">del</div>
                        </div>
                        </div>
                              `;
                } else if (category == 'category4') {
                    category4 += `<div class="product-box">
                    <div id= ${key}>
                    <img class="image" style="width: 50px;" src=${image}>
                    <img class="title">${title}</div><hr>
                    <div class="price">${parseFloat(price).toFixed(2)} ??</div><hr>
                    <div class="price2">${parseFloat(price2).toFixed(2)} ??</div><hr>
                    <div class="price3">${parseFloat(price3).toFixed(2)} ??</div><hr>

                    <div data-id=${key} class="delete">del</div>
                    </div>
                    </div>
                          `;
                } else if (category == 'category5') {
                    category5 += `<div class="product-box">
                    <div id= ${key}>
                    <img class="image" style="width: 50px;" src=${image}>
                    <img class="title">${title}</div><hr>
                    <div class="price">${parseFloat(price).toFixed(2)} ??</div><hr>
                    <div class="price2">${parseFloat(price2).toFixed(2)} ??</div><hr>
                    <div class="price3">${parseFloat(price3).toFixed(2)} ??</div><hr>

                    <div data-id=${key} class="delete">del</div>
                    </div>
                    </div>
                          `;
                } else if (category == 'category6') {
                    category6 += `<div class="product-box">
                    <div id= ${key}>
                    <img class="image" style="width: 50px;" src=${image}>
                    <img class="title">${title}</div><hr>
                    <div class="price">${parseFloat(price).toFixed(2)} ??</div><hr>
                    <div class="price2">${parseFloat(price2).toFixed(2)} ??</div><hr>
                    <div class="price3">${parseFloat(price3).toFixed(2)} ??</div><hr>

                    <div data-id=${key} class="delete">del</div>
                    </div>
                    </div>
                          `;
                }

            });
            $('.category1').html(category1);
            $('.category2').html(category2);
            $('.category3').html(category3);
            $('.category4').html(category4);
            $('.category5').html(category5);
            $('.category6').html(category6);


            /******* */

            $(".delete").click(function () {
                let thekey = $(this).data('id');
                beforeQuery.child(thekey).remove();
            })

            /****** */


        } else { console.log('NO data Found') }
    });


});
