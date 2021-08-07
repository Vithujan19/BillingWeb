import React from 'react';
// import './index.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs,Paper} from '@material-ui/core/';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function Index() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<div>

     <h1 style={{display:"block", padding:10}}> Details</h1>
    <div className={classes.root} >
       

      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Invoice" {...a11yProps(0)} />
        <Tab label="Product" {...a11yProps(1)} />
        <Tab label="Reports" {...a11yProps(2)} />
        
      </Tabs>
      <TabPanel value={value} index={0} style={{width:"100%"}}>
          <Paper elevation={3} style={{padding:20}}>
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
                                <table border="1" style={{width: "90%"}}>
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
</Paper>
      </TabPanel>
      <TabPanel value={value} index={1}  style={{width:"100%"}}>
      <Paper elevation={3} style={{padding:20}}>
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
                </Paper>
      </TabPanel>
      <TabPanel value={value} index={2}  style={{width:"100%"}}>
      <Paper elevation={3} style={{padding:20}}>
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
                                <table border="1" style={{width: "90%"}}>
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
                </Paper>
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
    </div>
  );
}


export default Index;