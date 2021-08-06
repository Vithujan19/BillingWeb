import React from 'react';
import './index.css';

function index() {
    return (
        <div className="bodyClass">
                <h2>Details</h2>
                <div className="tab">
                    <div className="tab">
                        <button className="tablinks" onclick="openCity(event, 'invoice-details')" id="defaultOpen">Invoice</button>
                        <button className="tablinks" onclick="openCity(event, 'Product')">Product</button>
                        <button className="tablinks" onclick="openCity(event, 'Reports')">Reports</button>
                    </div>
                </div>

                <div id="invoice-details" className="tabcontent">
                    <form action="/action_page.php">
                        <div className="container">
                            <form action="#" method="get">
                                <h1>Invoice details</h1>
                                <hr />

                                <label for="Date"><p>Date:<span id='date-time'></span>.</p></label>
                                <label for="invoice"><p>Invoice:<span id='invoice no'></span>.</p></label>
                                <div className="align-right"> <input type="text" placeholder="customer" name="customer" id="customer" /></div>
                                <table border="1" style={{width: "60%"}}>
                                    <tr>
                                        <th> <input type="text" placeholder="Item id" name="item id" id="item id" /></th>
                                        <th>Description</th>
                                        <th><input type="number" placeholder="Qty" name="qty" id="qty" /></th>
                                        <th>Price</th>
                                    </tr>
                                </table>
                                <table border="1" style={{width: "60%"}}>
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Description</th>
                                            <th>Qty</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <td>run the loop here</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                    </tr>

                                </table>
                                <table border="1" style={{width: "60%"}}>
                                    <tr>
                                        <td>TOTAL :<input type="number" placeholder="Total" name="total" id="total" /> </td>
                                        <td><button>Process</button></td>
                                        <td><button>Clear</button></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </form>
                </div>

                <div id="Product" className="tabcontent">
                    <h3>Product</h3>
                    <ul>
                        <li><label for="Product ID">Product ID: <input type="text" placeholder="Product ID" name="Product ID" id="Product ID" /></label></li>
                        <br />
                        <li><label for="Product Name"></label>Product Name: <input type="text" placeholder="Product Name" name="Product Name" id="Product Name" /></li>
                        <br />
                        <li><label for="Price">Price:<input type="text" placeholder="Price" name="Price" id="Price" /></label></li>
                        <br />
                        <li><label for="Qty">Oty: <input type="text" placeholder="Qty" name="Qty" id="Qty" /></label></li>
                    </ul>
                    <table>
                        <tr>
                            <td><button>Save</button></td>
                            <td><button>Update</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    </table>
                </div>

                <div id="Reports" className="tabcontent">
                    <h3>Reports</h3>
                    <form action="/action_page.php">
                        <div className="container">
                            <form action="#" method="get">
                                <hr />
                                <table>
                                    <tr>
                                        <td>
                                            <label for="Date">
                                                <p>Date From:<br /><span><input type="date" id="start" name="trip-start" value="2021-07-06" /></span>.</p>
                                            </label>
                                        </td>
                                        <td>
                                            <label for="Date"><p>Date To:<br /><span><input type="date" id="start" name="trip-start" value="2018-07-22" /></span>.</p>
                                            </label>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><button>Search</button></td>
                                    </tr>
                                </table>
                                <table border="1" style={{width: "60%"}}>
                                    <thead>
                                        <tr>
                                            <th>Invoice No</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Customer</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <td>run the loop here</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                    </tr>

                                </table>
                                <table border="1" style={{width: "60%"}}>
                                    <tr>
                                        <td><button>Print</button></td>
                                        <td><button>Clear</button></td>
                                    </tr>
                                </table>
                            </form>

                        </div>
                    </form>
                </div>
        </div >
    )
}

export default index;
