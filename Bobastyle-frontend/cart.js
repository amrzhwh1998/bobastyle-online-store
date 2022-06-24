
$(document).ready(function () {
    const database = firebase.database();
    const beforeQuery = database.ref('menu/')
    const beforecartQuery = database.ref('orders/')

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
                    color = value['color'],
                    degem = value['degm'],

                    size = value['size'],
                    image = value['image'];

                if (category == 'category1') {
                    if (size == undefined) {
                        size = ''
                    }
                    if (degem == undefined) {
                        degem = ''
                    }
                    category1 += `
                        <div class="flexbox">
                        <div id= ${key}>
                        <div class="food-card"
                            style="background-image:url('${image}'); background-size: cover;">
                            <div class="food-card-content">
                                <div class="heading show">
                                    <h2>${title}</h2>
                                </div>
                                <div class="hover-content">
                                    <div class="food-card-properties">
                                       
            
                                       
                                    </div>
                                    <div class="content">${color}</div>
                                    <div class="content">${degem}</div>
                                    <div class="content">${size}</div>

                                    <div data-id=${key} class="fa fa-shopping-cart thcardcart add-to-cart" id="add-to-cart" style="font-size: 30px;"></div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                              `;
                } else if (category == 'category2') {
                    if (size == undefined) {
                        size = ''
                    }
                    if (degem == undefined) {
                        degem = ''
                    }
                    category2 += `
                    <div class="flexbox">
                    <div id= ${key}>
                    <div class="food-card"
                        style="background-image:url('${image}'); background-size: cover;">
                        <div class="food-card-content">
                            <div class="heading show">
                                <h2>${title}</h2>
                            </div>
                            <div class="hover-content">
                                <div class="food-card-properties">
                                   
        
                              
                                </div>
                                <div class="content">${color}</div>
                                <div class="content">${degem}</div>
                                <div class="content">${size}</div>
                                <div data-id=${key} class="fa fa-shopping-cart thcardcart add-to-cart" id="add-to-cart" style="font-size: 30px;"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                          `;
                } else if (category == 'category3') {
                    if (size == undefined) {
                        size = ''
                    }
                    if (degem == undefined) {
                        degem = ''
                    }
                    category3 += `
                    <div class="flexbox">
                    <div id= ${key}>
                    <div class="food-card"
                        style="background-image:url('${image}'); background-size: cover;">
                        <div class="food-card-content">
                            <div class="heading show">
                                <h2>${title}</h2>
                            </div>
                            <div class="hover-content">
                                <div class="food-card-properties">
                                    
        
                                 
                                </div>
                                <div class="content">${color}</div>
                                <div class="content">${degem}</div>
                                <div class="content">${size}</div>
                                <div data-id=${key} class="fa fa-shopping-cart thcardcart add-to-cart" id="add-to-cart" style="font-size: 30px;"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                          `;
                } else if (category == 'category4') {
                    if (color == undefined) {
                        color = ''
                    }
                    if (degem == undefined) {
                        degem = ''
                    }
                    category4 += `
                    <div class="flexbox">
                    <div id= ${key}>
                    <div class="food-card"
                        style="background-image:url('${image}'); background-size: cover;">
                        <div class="food-card-content">
                            <div class="heading show">
                                <h2>${title}</h2>
                            </div>
                            <div class="hover-content">
                                <div class="food-card-properties">
                                  
        
                                </div>
                                <div class="content">${comint}</div>
                                <div data-id=${key} class="fa fa-shopping-cart thcardcart add-to-cart" id="add-to-cart" style="font-size: 30px;"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                          `;
                } else if (category == 'category5') {
                    if (color == undefined) {
                        color = ''
                    }
                    if (price3 == undefined) {
                        price3 = ''
                    }
                    category5 += `
                    <div class="flexbox">
                    <div id= ${key}>
                    <div class="food-card"
                        style="background-image:url('${image}'); background-size: cover;">
                        <div class="food-card-content">
                            <div class="heading show">
                                <h2>${title}</h2>
                            </div>
                            <div class="hover-content">
                                <div class="food-card-properties">
                                    <div><i class="fa fa-clock-o" style="font-size: 33px; color: #91a8d5;"></i>
                                        <p style="font-size: 15px;">${time} דקות</p>
                                    </div>
        
                                  
                                </div>
                                <div class="content">${comint}</div>
                                <div data-id=${key} class="fa fa-shopping-cart thcardcart add-to-cart" id="add-to-cart" style="font-size: 30px;"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                          `;
                } else if (category == 'category6') {
                    if (price2 == undefined) {
                        price2 = ''
                    }
                    if (price3 == undefined) {
                        price3 = ''
                    }
                    category6 += `
                    <div class="flexbox">
                    <div id= ${key}>
                    <div class="food-card"
                        style="background-image:url('${image}'); background-size: cover;">
                        <div class="food-card-content">
                            <div class="heading show">
                                <h2>${title}</h2>
                            </div>
                            <div class="hover-content">
                                <div class="food-card-properties">
                                    <div><i class="fa fa-clock-o" style="font-size: 33px; color: #91a8d5;"></i>
                                        <p style="font-size: 15px;">${time} דקות</p>
                                    </div>
        
                                    <div><i class="fa fa-money" style="font-size: 33px; color: #91a8d5;"></i>
                                    <p style="font-size: 15px;">${price2} , ${price3} , ${price} ₪</p>
                                    </div>
                                </div>
                                <div class="content">${comint}</div>
                                <div data-id=${key} class="fa fa-shopping-cart thcardcart add-to-cart" id="add-to-cart" style="font-size: 30px;"></div>
                            </div>
                        </div>
                    </div>
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

            $('.add-to-cart').click(function () {
                let thekey = $(this).data('id');
                firebase.database().ref('menu/' + thekey).on('value', function (snapshot) {
                    let p2
                    let p3
                    if (snapshot.val().size == undefined) {
                        p2 = ''

                    } else {
                        p2 = snapshot.val().size
                    }
                    if (snapshot.val().degm == undefined) {
                        p3 = ''
                    } else {
                        p3 = snapshot.val().degm
                    }
                    let appenddata = `
                             <tr>
                             <td class="carttitle">${snapshot.val().title}</td>
                             <td><input type="number" name="number" style="width:30px;" class='cartnumber' value="1"/></td>
                                                          <td class="cartprice">${snapshot.val().price}</td>

                             <td >
                             <select class="cartsize">
                             <option value="${snapshot.val().color}"><p>${snapshot.val().color} </p></option>
                             <option value="${p2}"><p>${p2}</p></option>
                             <option value="${p3}"><p>${p3}</p></option>
                             </select>
                             
                             </td>
                             <td class="removeme">X</td>
                             </tr>`;
                    $('.cart').append(appenddata);
                });
            });
            $('.add-to').click(function () {
                let thekey = $(this).data('id');
                firebase.database().ref('menu/' + thekey).on('value', function (snapshot) {
                    let appenddata = `
                             <tr>
                             <td class="carttitle">${snapshot.val().title}</td>
                             <td class="removeme">X</td>
                             </tr>`;
                    $('.cart').append(appenddata);
                    swal("הוספת בורגיר לסל אתה יכול עכשו לבחור תוספות");
                    $('html,body').animate({
                        scrollTop: $("#second").offset().top
                    }, 'slow');
                });
            });
            $('.cart-icon,.feedback').click(function () {
                $('.cart-container').slideToggle("slow");
            })
            $(document).on('click', '.removeme', function () {

                $(this).parent().remove();
            });
            $(document).on('click', '.removeme,.cart-icon,.thcardcart,.cartcard,.feedback', function () {
                total();
                let totalrows = $('.cartprice').length,
                    itemcounter = $('.totalitems');
                itemcounter.fadeOut('slow', function () {
                    $(this).html(totalrows).fadeIn('slow');
                })
            });
            const total = () => {
                let allcareproduct = $('.cartprice'),
                    total = 0;

                for (let i = 0; i < allcareproduct.length; i++) {
                    var getprice = $('.cartprice').eq(i).text();
                    total += parseInt(getprice);
                }
                $('.total').text(`Total : ${parseFloat(total).toFixed(2)} ₪`);
                if (total > 1) {
                    $('.send-oreder').slideDown("slow");
                    $('.oredDetal').slideDown("slow");
                } else {
                    $('.send-oreder').slideUp("slow");
                    $('.oredDetal').slideUp("slow");
                }
                return total;
            }





            /**send order */
            let t = [];
            let tt = 0;
            let pp = '';
            let nn = '';

            $(document).on('click', '.send-oreder', function () {
                tt = 0
                var oredereditems = [];
                let totalrows = $('.cartprice').length;

                for (let i = 0; i < totalrows; i++) {
                    var items = {
                        item: $('.carttitle').eq(i).text(),
                        num: $('.cartnumber').eq(i).val(),
                        size: $('.cartsize').eq(i).val(),

                    }
                    oredereditems.push(items);
                }

                for (let i = 0; i < oredereditems.length; i++) {

                    tt = parseInt(tt) + parseInt(oredereditems[i].price) * parseInt(oredereditems[i].num)



                }


                let newid = beforecartQuery.push();
                newid.set({
                    products: oredereditems,
                    total: tt,
                    table: document.getElementById("phone").value,
                    name: document.getElementById("fullname").value,
                },


                    function (error) {
                        if (!error) {
                            $('.removeme').click();
                            $('.cart').append(swal("המשלוח נשלח אתה תקבל סיחה מהשליח תודה"));
                            setTimeout(function () {
                                $('.cart-toggle').click();
                            }, 2500);
                        }
                    });


            });

        }

    });

});


