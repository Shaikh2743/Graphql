import React, { Component } from 'react'
import sendRequest from './request';
import './styles/App.css';
import './gallery.css';
import Search from './search.png';
import Main from './main-logo.png';
import Carousel from './jacket2.jpg';
import Carousel1 from './jacket2-a.jpg';
import Carousel2 from './jacket2-b.jpg';
import Carousel3 from './jacket2-c.jpg';
import Carousel4 from './jacket2-d.jpg';
import Carousel5 from './jacket2-e.jpg';
// import Profile from './profile.jpeg';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      mydata: null,
      html: null,
    }
  }
  componentDidMount() {
    const query = `
    query{
      currency{
        available_currency_codes
        base_currency_code
        base_currency_symbol
        default_display_currecy_code
        default_display_currecy_symbol
        default_display_currency_code
        default_display_currency_symbol
      }
      products(
        search:null
        sort:{ position: ASC }
        currentPage: 1
        pageSize: 1
        filter: {
          custom_filter:[{attribute: "entity_id",condition:{eq: "1958"}}]      
        }
      )
    
      {
        items{
          name
        sku
          breadcrumbs{
            category_name
          }
          
          price{
            minimalPrice{
              amount{
                currency
                value
              }
            }
            regularPrice{
              amount{
                currency
                value
              }
            }
          }
          media_gallery_entries{
            media_type
            id
            thumbnail{
              url
            }
          }
          description{
            html
          }
          image{
            url
          }
         meta_description
         related_products{
          name
          media_gallery{
            url
          }
          image{
            url
          }
          
          
          special_price
           price{
        maximalPrice{
          amount{
            value
          }
        }
          regularPrice{
            amount{
              value
            currency
            }
          }  
           minimalPrice{
            amount{
              value
              
              
            }
          }
            
       
      }
        
        }
      }
        
      }
      currency{
        available_currency_codes
        base_currency_code
        base_currency_symbol
        default_display_currecy_code
        default_display_currecy_symbol
        default_display_currency_code
        default_display_currency_symbol
      }
      cmsBlocks(identifiers: "3"){
        items {
          content
          disabled
          identifier
          title
        }
      }
    }
    `
    sendRequest({
      query,
      variables: { url: "men.html" }
    }).then(res => {
      console.log(res);
      this.setState({
        data: res,
        mydata: JSON.stringify(res.data)

      })
    })
  }

  render() {
    console.log(this.state)
    // console.log(this.state.mydata.products[0].items[0].media_gallery_entries[0].id)
    return (
      <div>
        <div>
          <div className="top">
            <div className="top-content">
              <span className="content">
                <p>GET THIS PWA FOR YOUR MAGENTO STORE.
                  LEARN MORE AT WWW.NEXPWA.COM</p>
              </span>
            </div>
          </div>
          <div className="main-content">
            <div className="main-header">
              <div className="header-content search-bar" >
                <img alt="search-logo" className="search-logo" src={Search} />
                <input type="search" className="input-search" placeholder="Type a new search">
                </input>
              </div>
              <div className="header-content logo-container">
                <img className="main-logo" src={Main} />
              </div>
              <div className="header-content dropdown">
                <select>
                  <option>English</option>
                  <option>Arabic (عربى)</option>
                </select>
              </div>
              <div className="header-content language">
                <select>
                  <option>
                    INR
                  </option>
                  <option>
                    USD
                  </option>
                </select>
              </div>
              <div className="header-content Bprofile ">
                <button aria-label="Open my account" className="profile" >
                  <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 24 24" width="26" fill="grey"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg></button>
              </div>
              <div className="header-content cart">
                <button className="Minicart" ><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="grey"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                  <span aria-label="Items in cart" class="items-in-cart"></span></button>
              </div>
            </div>
          </div>
          <div className="App">
            {/* <h1>React and Graphql</h1>
        <p className="sample">Sample response</p> */}
            {
              !this.state.data ? (
                <p className="sample">Loading....</p>
              ) : (<>
                <div>

                  <div>
                    <div className="main1">
                      <div className="mainA">
                        {/* <div>
                          <img alt="main" className="main-image" src=
                            {this.state.data.data.products.items[0].image.url} />
                        </div>
                        <div className="tumbnail">
                          {this.state.data.data.products.items[0].media_gallery_entries.map((i, val) => {
                            return (
                              <>
                                <img alt="thumbnails" src={i.thumbnail.url} />
                                <span className="thum-id" key={val}>
                                  {i.id}
                                </span>
                              </>
                            )
                          })}
                        </div> */}
                                        <div className="gallery-slider">
                    <div className="thumbnails">
                        <div class="img-select">
                            <div class="img-item" >
                                <a href="#slide1" data-id="1"><img src={Carousel2} alt="product-image" /></a>
                            </div>
                            <div class="img-item" >
                                <a href="#slide2" data-id="1"><img src={Carousel} alt="product-image" /></a>
                            </div>
                            <div class="img-item" >
                                <a href="#slide3" data-id="1"><img src={Carousel1} alt="product-image" /></a>
                            </div>
                            <div class="img-item">
                                <a href="#slide4" data-id="1"><img src={Carousel3} alt="product-image" /></a>
                            </div>
                            <div class="img-item">
                                <a href="#slide5" data-id="1"><img src={Carousel4} alt="product-image" /></a>
                            </div>
                            <div class="img-item">
                                <a href="#slide6" data-id="1"><img src={Carousel5} alt="product-image" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="main-image">
                        <div class="gallery">
                            <div class="card-wrapper">
                                <div class="card">
                                    <div class="product-imgs">
                                        <div class="img-display">
                                            <div class="img-showcase">
                                                <img id="slide1" class="Product" src={Carousel2} />
                                                <img id="slide2" class="Product" src={Carousel} />
                                                <img id="slide3" class="Product" src={Carousel1} />
                                                <img id="slide4" class="Product" src={Carousel3} />
                                                <img id="slide5" class="Product" src={Carousel4} />
                                                <img id="slide6" class="Product" src={Carousel5} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                      </div>
                      <div className="mainB">
                        <div>
                          <div>
                            <h3>
                              {this.state.data.data.products.items[0].name}
                              <br /></h3>

                            <p className="sku">
                              SKU : {this.state.data.data.products.items[0].sku}
                            </p><br />

                          </div>

                          <div className="price-container">
                            <div className="sub-container">
                            <span><p className="sprice">
                              {this.state.data.data.currency.base_currency_symbol}
                              {this.state.data.data.products.items[0].price.minimalPrice.amount.value}<br />
                            </p>
                            <p className="price">
                                {this.state.data.data.currency.base_currency_symbol}
                                {this.state.data.data.products.items[0].price.regularPrice.amount.value}
                              </p>
                            </span>
                            </div>
                            <div className="sub-container">
                            <span><button>1</button></span>
                            <span><button>2</button></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="description">
                      <h3> ABOUT THIS PRODUCT</h3>
                      <div className="danger" dangerouslySetInnerHTML={{ __html: this.state.data.data.products.items[0].description.html }} />
                    </div>
                  </div>
                </div>

              </>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
