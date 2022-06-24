$(function () {
    const database = firebase.database();
    const beforeQuery = database.ref('orders/');


    /************************** */
    beforeQuery.on('value', function success(data) {
        if (data) {
            let orders = '';
            $.each(data.val(), function (key, value) {
                let oreder_number = key,
                    oreder_total = value.total,
                    total_products = value.products,
                    table = value.table,
                    phone = value.name,
                    ord = value.ord;

                orders += `<div class="order-id ab"><div id="myB" style="margin-right:10px;">${table}</div>
                <div id="myB">${phone}</div>
                                <span class="delete" data-id=${key}>X</span>                                
                                </div>
                                <div class="order-details">
                                <table id="myTabl" cellspacing="0" cellpadding="0">
                                <tr>
                              
                                <th>שם מוצר</th>
                                  <th>   קמות  &nbsp; </th>
                                  <th> size</th>

                                </tr>
                                
                                `;
                $.each(total_products, function (key, value) {
                    orders += `<tr><td> ${value.item}</td> <td>${value.num}</td>    <td>${value.size}</td> </tr>
                    `
                });
                orders += `
                </table>
                
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.6/jspdf.plugin.autotable.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.22/pdfmake.min.js"></script>
                <script type="text/javascript"
                    src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
                            <script type="text/javascript">
                            function createPDF() {
                                
                                var sTable = document.getElementById('myTabl').innerHTML;
                                var total = document.getElementById('order-total').innerHTML
                                var name = document.getElementById("myB").innerHTML
                                var style = "<style>";
                                style = style + "table {width: 100%;font: 17px Calibri;}";
                                style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
                                style = style + "padding: 2px 3px;text-align: center;}";
                                style = style + "</style>";
                    
                                // CREATE A WINDOW OBJECT.
                                var win = window.open('', '', 'height=700,width=700');
                    
                                win.document.write('<html style="text-align: end;"><head>');
                                win.document.write('<div style="width: 100%; "><img style="margin-bottom: 50px; width: 100%; height: 300px;" src="logo.png" alt=""></div>');   // <title> FOR PDF HEADER.
                                win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
                                win.document.write('</head>');
                                win.document.write('רשימת קניות לכבוד :' + name);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
                    
                                win.document.write('<table>');
                                win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
                                win.document.write('</table>');
                                win.document.write('המחרי הכללי:' + total);
                    
                                win.document.write('</html>');
                    
                                win.document.close(); 	// CLOSE THE CURRENT WINDOW.
                    
                                win.print();    // PRINT THE CONTENTS.
                            }
                    
                        </script>
                </div> 
               
                `;
                $(document).on('click', '#myB', function () {
                    $(function () {
                        $('#myButton').floatingWhatsApp({
                            phone: '+972' + table,
                            buttonImage: '<img src="burger.svg" />',
                            popupMessage: 'Hello, how can we help you?',
                            message: "I'd like to order a pizza",
                            /*showPopup: true,
                            showOnIE: false,
                            headerTitle: 'Welcome!',
                            headerColor: '',
                            backgroundColor: '',
                            //buttonImage: '<img src="burger.svg" />'*/
                        });
                    });
                })

            });


            $('.append-orders').html(orders);

            $(".delete").click(function () {
                let thekey = $(this).data('id');
                beforeQuery.child(thekey).remove();
            })

        }

    });

    $(document).on('click', '.order-id', function () {
        $(this).next('.order-details').slideToggle();
    })
});


