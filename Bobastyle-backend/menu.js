
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

    $(document).ready(function () {

        // Search all columns
        $('#txt_searchall').keyup(function () {
            // Search Text
            var search = $(this).val();

            // Hide all table tbody rows
            $('table tbody tr').hide();

            // Count total search result
            var len = $('table tbody tr:not(.notfound) td:contains("' + search + '")').length;

            if (len > 0) {
                // Searching text in columns and show match row
                $('table tbody tr:not(.notfound) td:contains("' + search + '")').each(function () {
                    $(this).closest('tr').show();
                });
            } else {
                $('.notfound').show();
            }

        });

        // Search on name column only
        $('#txt_name').keyup(function () {
            // Search Text
            var search = $(this).val();

            // Hide all table tbody rows
            $('table tbody tr').hide();

            // Count total search result
            var len = $('table tbody tr:not(.notfound) td:nth-child(2):contains("' + search + '")').length;

            if (len > 0) {
                // Searching text in columns and show match row
                $('table tbody tr:not(.notfound) td:contains("' + search + '")').each(function () {
                    $(this).closest('tr').show();
                });
            } else {
                $('.notfound').show();
            }

        });

    });

    /******************** */
    $('[name=submit]').click(function (e) {
        e.preventDefault();

        const category = $('[name=category]').val(),
            title = $('[name=title]').val(),
            price = $('[name=price]').val(),
            price2 = $('[name=price2]').val(),

            num = $('[name=num]').val(),
            degm = $('[name=degm]').val(),
            color = $('[name=color]').val(),
            size = $('[name=size]').val(),

            image = $('[name=image]').val().slice(12),

            newid = beforeQuery.push();

        if (!title || !price || !num) {
            notifications('fillall');
        } else {
            newid.set({
                category: category,
                title: title,
                price: price,
                price2: price2,

                num: num,
                degm: degm,
                color: color,
                size: size,
                image: "https://firebasestorage.googleapis.com/v0/b/bobasys.appspot.com/o/" + image + "?alt=media"

            },
                function (error) {
                    if (!error) {
                        notifications("inserted successfully");
                        $('[name=title]').val("");
                        $('[name=price]').val("");
                        $('[name=price2]').val("");

                        $('[name=num]').val("");
                        $('[name=degm]').val("");
                        $('[name=color]').val("");
                        $('[name=image]').val("");
                        $('[name=size]').val("");

                    }
                    else {
                        console.log('Not Saved');
                    }

                });
        }
    });

    $('#close').click(function () {
        $('#apdateForm').slideUp();
    })

    $('#bt1').click(function () {

        $('.me1').slideDown();
        $('.me2').slideUp();
        $('.me3').slideUp();
        $('.me4').slideUp();
        $('.me5').slideUp();

    })

    $('#bt2').click(function () {

        $('.me2').slideDown();
        $('.me1').slideUp();
        $('.me3').slideUp();
        $('.me4').slideUp();
        $('.me5').slideUp();

    })

    $('#bt3').click(function () {

        $('.me3').slideDown();
        $('.me2').slideUp();
        $('.me1').slideUp();
        $('.me4').slideUp();
        $('.me5').slideUp();

    })

    $('#bt4').click(function () {

        $('.me4').slideDown();
        $('.me2').slideUp();
        $('.me3').slideUp();
        $('.me1').slideUp();
        $('.me5').slideUp();

    })

    $('#bt5').click(function () {

        $('.me5').slideDown();
        $('.me2').slideUp();
        $('.me3').slideUp();
        $('.me4').slideUp();
        $('.me1').slideUp();

    })

    beforeQuery.on('value', function success(data) {
        if (data) {
            let category1 = '';
            let category2 = '';
            let category3 = '';
            let category4 = '';
            let category5 = '';
            $.each(data.val(), function (key, value) {
                let id = key,
                    category = value['category'],
                    title = value['title'],
                    price = value['price'],
                    price2 = value['price2'],

                    num = value['num'];
                degm = value['degm'];
                color = value['color'];
                size = value['size'];

                image = value['image'];

                /*
                <div class="product-box">
                                          <div id= ${key}>
                                          <h2 class="title">${title}</h2>
                                          <h2 class="num" >${num}</h2>
                                          <h2 class="degm" >${degm}</h2>
                                          <h2 class="color" >${color}</h2></div>
                
                                          <hr>
                                          <div class="price">${parseFloat(price).toFixed(2)}₪</div><hr>
                                          <div data-id=${key} class="update">לעדכן</div>
                
                                          <div data-id=${key} class="delete">למחוק</div>
                                          </div>
                                          </div>
                
                
                */
                if (category == 'category1') {
                    category1 += `<tr id= ${key}>
                          <td><img class="image" src=${image} style="width: 50px; height: 50px;" ></td>
                          <td class="title">${title}</td>
                          <td class="num" >${num}</td>
                          <td class="degm" >${degm}</td>
                          <td class="color" >${color}</td>
                          <td class="size" >${size}</td>

                          <td class="price">${parseFloat(price).toFixed(2)}₪</td>
                          <td class="price">${parseFloat(price2).toFixed(2)}₪</td>
                          <td class="price">${(parseFloat(price2).toFixed(2) - parseFloat(price).toFixed(2)) * parseFloat(num)}₪</td>

                          <td><a href="#apdateForm" data-id=${key} class="update btn bg-success btn-sm btn-ubtade">לעדכן</a></td>

                          <td><div data-id=${key} class="delete btn btn-danger btn-sm">למחוק</div></td>
                          
                          </tr>
                          
                          `;
                } else if (category == 'category2') {
                    category2 += `<tr id= ${key}>
                    <td><img class="image" src=${image} style="width: 50px; height: 50px;" ></td>

                            <td class="title">${title}</td>
                            <td class="num" >${num}</td>
                            <td class="degm" >${degm}</td>
                            <td class="color" >${color}</td>
                            <td class="size" >${size}</td>

                            <td class="price">${parseFloat(price).toFixed(2)}₪</td>
                            <td class="price">${parseFloat(price2).toFixed(2)}₪</td>
                            <td class="price">${(parseFloat(price2).toFixed(2) - parseFloat(price).toFixed(2)) * parseFloat(num)}₪</td>

                            <td><div data-id=${key} class="update btn bg-success btn-sm btn-ubtade">לעדכן</div></td>
  
                            <td><div data-id=${key} class="delete btn btn-danger btn-sm">למחוק</div></td>
                            
                            </tr>
                            `;
                } else if (category == 'category3') {
                    category3 += `<tr id= ${key}>
                    <td><img class="image" src=${image} style="width: 50px; height: 50px;" ></td>

                                <td class="title">${title}</td>
                                <td class="num" >${num}</td>
                                <td class="degm" >${degm}</td>
                                <td class="color" >${color}</td>
                                <td class="size" >${size}</td>

                                <td class="price">${parseFloat(price).toFixed(2)}₪</td>
                                <td class="price">${parseFloat(price2).toFixed(2)}₪</td>
                                <td class="price">${(parseFloat(price2).toFixed(2) - parseFloat(price).toFixed(2)) * parseFloat(num)}₪</td>
                                <td><div data-id=${key} class="update btn bg-success btn-sm btn-ubtade">לעדכן</div></td>
      
                                <td><div data-id=${key} class="delete btn btn-danger btn-sm">למחוק</div></td>
                                
                                </tr>
                                `;
                } else if (category == 'category4') {
                    category4 += `<tr id= ${key}>
                    <td><img class="image" src=${image}></td>

                                    <td class="title">${title}</td>
                                    <td class="num" >${num}</td>
                                    <td class="degm" >${degm}</td>
                                    <td class="color" >${color}</td>
                                    <td class="price">${parseFloat(price).toFixed(2)}₪</td>
                                    <td class="price">${parseFloat(price2).toFixed(2)}₪</td>
                                    <td class="price">${(parseFloat(price2).toFixed(2) - parseFloat(price).toFixed(2)) * parseFloat(num)}₪</td>
                                    <td><div data-id=${key} class="update btn bg-success btn-sm btn-ubtade">לעדכן</div></td>
          
                                    <td><div data-id=${key} class="delete btn btn-danger btn-sm">למחוק</div></td>
                                    
                                    </tr>
                                    `;
                } else if (category == 'category5') {
                    category5 += `<tr id= ${key}>
                    <td><img class="image" src=${image}></td>

                                        <td class="title">${title}</td>
                                        <td class="num" >${num}</td>
                                        <td class="degm" >${degm}</td>
                                        <td class="color" >${color}</td>
                                        <td class="price">${parseFloat(price).toFixed(2)}₪</td>
                                        <td class="price">${parseFloat(price2).toFixed(2)}₪</td>
                                        <td class="price">${(parseFloat(price2).toFixed(2) - parseFloat(price).toFixed(2)) * parseFloat(num)}₪</td>
                                        <td><div data-id=${key} class="update btn bg-success btn-sm btn-ubtade">לעדכן</div></td>
              
                                        <td><div data-id=${key} class="delete btn btn-danger btn-sm">למחוק</div></td>
                                        
                                        </tr>
                                        `;


                }
            });
            $('.category1').html(category1);
            $('.category2').html(category2);
            $('.category3').html(category3);
            $('.category4').html(category4);
            $('.category5').html(category5);


            $(".delete").click(function () {
                let thekey = $(this).data('id');
                beforeQuery.child(thekey).remove();
            })



            $('.update').click(function () {
                let thekey = $(this).data('id');
                $('#apdateForm').slideDown();

                let num = $(`#${thekey} > .num`).text();
                $('[name=newNum]').val(parseFloat(num));
                $('[name=id]').val(thekey);

                $('[name=update]').click(function (e) {
                    e.preventDefault();

                    let theid = $('[name=id]').val();
                    newNum = $('[name=newNum]').val();

                    beforeQuery.child(theid).update({
                        num: newNum

                    })
                    notifications('updated');
                    $('#apdateForm').slideUp();
                })

            })
            /****** */


        } else { console.log('NO data Found') }
    });


});
