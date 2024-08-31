import { Form, Input, Button, Divider, DatePicker, Checkbox} from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';

export default function SignUp() {

    return (
        <div className="container text-center">
            <h1 className="text-[24px] text-[#107433] font-bold mt-[50px]">New to Farmy?</h1>
            <div className="w-[100%] flex gap-5">
                <Form 
                style={{width: '100%', marginTop: '10px'}}
                >
                    <div className="w-[100%] grid grid-cols-2 gap-[20px]">
                        <div className="w-[100%]">
                            <h3 className="text-[14px] font-bold mb-[30px]">Personal account – Farmy.ch</h3>
                            <div className="w-[100%] grid grid-cols-2 gap-x-[20px] gap-y-[60px]">
                                <Form.Item
                                name="firstName"
                                layout="vertical"
                                rules={[{ required: true, message: 'Field required' }]}
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <Input width={'100%'} style={{borderBottom: '1px dashed ', borderRadius: '0', backgroundColor: '#FFF8F1'}} />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        FIRST NAME
                                    </div>
                                </Form.Item>
                                <Form.Item
                                name="lastName"
                                layout="vertical"
                                rules={[{ required: true, message: 'Field required' }]}
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <Input width={'100%'} style={{borderBottom: '1px dashed ', borderRadius: '0', backgroundColor: '#FFF8F1'}} />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        LAST NAME
                                    </div>
                                </Form.Item>
                                <Form.Item
                                name="email"
                                layout="vertical"
                                rules={[{ required: true, message: 'Field required' }]}
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <Input width={'100%'} style={{borderBottom: '1px dashed ', borderRadius: '0', backgroundColor: '#FFF8F1'}} />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        EMAIL
                                    </div>
                                </Form.Item>
                                <Form.Item
                                name="number"
                                layout="vertical"
                                rules={[{ required: true, message: 'Field required' }]}
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <Input placeholder="+00 00 000 00 00" width={'100%'} style={{borderBottom: '1px dashed ', borderRadius: '0', backgroundColor: '#FFF8F1'}} />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        MOBILE PHONE NUMBER (+41 xx xxx xx xx)
                                    </div>
                                </Form.Item>
                                <Form.Item
                                name="password"
                                layout="vertical"
                                rules={[{ required: true, message: 'Field required' }]}
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <Input.Password width={'100%'} style={{borderBottom: '1px dashed ', borderRadius: '0', backgroundColor: '#FFF8F1'}} />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        PASSWORD
                                    </div>
                                </Form.Item>
                                <Form.Item
                                name="confirmPassword"
                                layout="vertical"
                                rules={[{ required: true, message: 'Field required' }]}
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <Input.Password width={'100%'} style={{borderBottom: '1px dashed ', borderRadius: '0', backgroundColor: '#FFF8F1'}} />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        CONFIRM PASSWORD
                                    </div>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="w-[100%]">
                            <h3 className="text-[14px] font-bold mb-[30px]">Shipping Address</h3>
                            <div className="w-[100%] grid grid-cols-2 gap-x-[20px] gap-y-[60px]">
                                <Form.Item
                                name="title"
                                layout="vertical"
                                rules={[{ required: true, message: 'Field required' }]}
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <Input width={'100%'} style={{borderBottom: '1px dashed ', borderRadius: '0', backgroundColor: '#FFF8F1'}} />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        TITLE
                                    </div>
                                </Form.Item>
                                <Form.Item
                                name="company"
                                layout="vertical"
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <Input width={'100%'} style={{borderBottom: '1px dashed ', borderRadius: '0', backgroundColor: '#FFF8F1'}} />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        COMPANY
                                    </div>
                                </Form.Item>
                                <Form.Item
                                name="street"
                                layout="vertical"
                                rules={[{ required: true, message: 'Field required' }]}
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <Input width={'100%'} style={{borderBottom: '1px dashed ', borderRadius: '0', backgroundColor: '#FFF8F1'}} />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        STREET
                                    </div>
                                </Form.Item>
                                <Form.Item
                                name="houseNumber"
                                layout="vertical"
                                rules={[{ required: true, message: 'Field required' }]}
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <Input width={'100%'} style={{borderBottom: '1px dashed ', borderRadius: '0', backgroundColor: '#FFF8F1'}} />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        HOUSE NUMBER
                                    </div>
                                </Form.Item>
                                <Form.Item
                                name="zipcode"
                                layout="vertical"
                                rules={[{ required: true, message: 'Field required' }]}
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <Input width={'100%'} style={{borderBottom: '1px dashed ', borderRadius: '0', backgroundColor: '#FFF8F1'}} />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        ZIPCODE
                                    </div>
                                </Form.Item>
                                <Form.Item
                                name="city"
                                layout="vertical"
                                rules={[{ required: true, message: 'Field required' }]}
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <Input width={'100%'} style={{borderBottom: '1px dashed ', borderRadius: '0', backgroundColor: '#FFF8F1'}} />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        CITY
                                    </div>
                                </Form.Item>
                                <Form.Item
                                name="birthDate"
                                layout="vertical"
                                rules={[{ required: true, message: 'Field required' }]}
                                style={{width: '100%', textAlign: 'left'}}
                                >
                                    <DatePicker
                                    format={'DD/MM/YYYY'}
                                    style={{width: '100%', backgroundColor: '#FFF8F1'}}
                                    />
                                    <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(0, 0, 0, 0.45)', fontSize: '11px', fontWeight: 'bold'}}>
                                        Birth Date
                                    </div>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[100%] flex-col items-center mt-[50px] mb-[20px]">
                        <Form.Item
                        name="checkbox"
                        layout="vertical"
                        rules={[{ required: true, message: 'Field required' }]}
                        style={{textAlign: 'left'}}
                        >
                            <Checkbox>I agree to the <span className="text-[#F4991A]">terms & conditions</span></Checkbox>
                        </Form.Item>
                        <Button style={{marginTop: '30px', width: '155px', height: '45px', backgroundColor: '#F4991A', borderColor: '#F4991A', fontSize: '16px', fontWeight: 'bold', color: 'white'}}>Register</Button>
                    </div>
                </Form>
            </div>
            <div className="h-[230px] mx-auto max-w-[600px] w-[100%] text-[12px] overflow-y-auto border py-3 px-2 text-start" rows="5">
                <h3 id="scope-of-application">1. SCOPE OF APPLICATION</h3>
                <p>This online shop is run by Farmy AG, Buckhauserstrasse 28, 8048 Zurich.</p>

                <p>These terms and conditions apply in the time the contract was amended for all business relations between Farmy (hereinafter we or us) and their customers (you).</p>

                <p>These terms are deemed to have been accepted when ordering goods or services. Differing conditions require written confirmation from us.</p>

                <h3 id="compatibility">2. COMPATIBILITY</h3>
                <p>The presentation of products in the online shop is not a legally-binding resolution, but merely represents a non-binding online catalog. Just putting products in the “basket” is not considered a binding order. A binding order for the products contained in the basket is only completed and valid when clicking the “Order” button on the order page. We will then send you an immediate contract confirmation via e-mail, with the receipt of the contract. 
                The acceptance is subject to the legality and the availability of the ordered goods or services. Temporarily not deliverable products will have to be reordered by you. The availability display in the online store serves as information, not as a delivery confirmation, it may be inaccurate in exceptional cases.
                Price fluctuations in products are possible due to harvest or currency fluctuations. Decisive is the contract price specified at the time.
                A maximum of one customer account per household/company is permitted, unless agreed in writing and by mutual consent.</p>

                <h3 id="delivery-and-shipping-costs--low-order-value-surcharge">3. DELIVERY AND SHIPPING COSTS / LOW ORDER VALUE SURCHARGE</h3>
                <p>We will deliver the ordered goods to the address specified in the order at the time specified in the order. In exceptional cases, certain products may not be available, but may be replaced by another producer who can supply the same product in the same quality (same certificate). In this case you will be informed about the substitute via e-mail. If you do not agree to the exchange, please contact our customer care for a reimbursement We are entitled to make partial deliveries and services at any given time. If partial deliveries are carried out by us, we reimburse the missing product or if a complementary delivery is possible, we do assume the additional postage.. If you should not be home at the time of delivery, we do have your permission to place the goods in front of the door, respectively to execute your note regarding the placement of your order, which you can leave when submitting the order. Our frozen products are delivered in cooling bags with dry ice, so that they remain frozen when they reach you. For this we charge a dry ice flat rate of CHF 5. Caution is required upon receipt of dry ice products! Use gloves! Dry ice = -78°C! Direct contact with unprotected skin can result in serious frostbite. Dry ice is not to be toyed with and should be kept away from children! We guarantee the cold chain until delivery and do not carry any responsibility after that.
                The delivery is defined as «a delivery to the front door». If requested by the customer and under conditions of liability for any damage resulting from mistreatment or the like, we deliver to the apartment, this means we go through the front door to place the goods, e.g. on the kitchen table.</p>

                <p>Minimum order value: 						First order CHF 50 / From the second order CHF 79</p>

                <p>Information on delivery costs is currently being adjusted.</p>

                <p>The stated price applies for all deliveries incl. the applicable VAT. The delivery slots here above can be adapted depending on season or order volume. The delivery slots effectively open and available are shown at check-out.</p>

                <p><strong>Minimum ORDER VALUE SURCHARGE</strong></p>

                <p>For orders from the minimum order value of CHF 80 up to an order value of CHF 100 we charge a minimum order surcharge of CHF 7.90. The minimum order surcharge applies to all zones and is waived as soon as the value of the order exceeds CHF 100 or if you are in possession of a Hofpass, until it expires.</p>

                <h3 id="farmy-box-conditions"><strong>3.1“Farmy Box” conditions</strong></h3>

                <p>By ordering products at Farmy.ch that are delivered in “Farmy Boxes”, the customer agrees to pay 10 CHF per box if damaged or customer wishes not to return the “Farmy Box/es”. In this case the customer automatically becomes the owner of the “Farmy Box/es”.</p>

                <p>The “Farmy Box/es” must be returned to Farmy AG within 1 month of delivery. After the stipulated period, Farmy AG renounces the restitution of the “Farmy Boxes” and invoices the customer the value of every “Farmy Box” sent. The CHF 5 deposit will be kept and deducted from the total invoiced amount.</p>

                <p><strong>3.1.2 Deposit</strong></p>

                <p>A) The CHF 5 deposit does not cover the cost of the unreturned “Farmy Boxes”.</p>

                <p>B) The deposit of CHF 5 is kept to cover the Swiss Post pickup service if that should happen.</p>

                <p>C) The deposit will be deducted from any invoice for the unreturned “Farmy Boxes”.</p>

                <p>D) Deposit reimbursements will be applied to the customer’s account balance at Farmy. Reimbursement to credit card/Paypal/Twint may be done upon written request at service@farmy.ch.</p>

                <p><strong>3.1.3 Return process</strong></p>

                <p>1 month after the order, Farmy AG will send a reminder e-mail to the customer with several options to return the “Farmy Boxes”. If the “Farmy Boxes” are then not returned, Farmy will automatically apply its right to renounce the restitution of the “Farmy Boxes” and will claim the full value (CHF 10 per box minus the CHF 5 deposit already paid). The invoice will be sent and handled fully by our invoicing partner CembraPay AG.</p>

                <p><strong>A-Farmy Pickup:</strong> “Farmy Boxes” may be given back anytime to our delivery service. Customers may give it to the courier or leave it in their milk box or under or above mailboxes on the day of a delivery. The deposit will be reimbursed as soon as it is picked by the courier (Delivery zone A &amp; B).</p>

                <p><strong>B-Drop bags at Farmy warehouse:</strong> Customers may return the “Farmy Boxes” directly to our warehouse and receive the deposit refund on your Farmy Account balance</p>

                <p><strong>C-Home pickup by Swiss Post:</strong></p>

                <p>A) At any time, the customer may return the “Farmy Boxes” through Swiss Post. Customers need to leave the “Farmy Boxes” in their open milk box or under or above mailboxes, following the process instructions www.farmy.ch/box</p>

                <p>B) Farmy retains the right to charge an extra Swiss Post pick up cost if the customer does not follow the return instructions properly.</p>

                <p>C) When choosing this option, the customer agrees that the deposit of CHF 5 is not refunded and will be transferred to Swiss Post to cover the pickup services.</p>

                <p>D) Farmy will fully validate the returned “Farmy Boxes” within 4 weeks after pick-up by Swiss Post. Farmy retains the right to claim/invoice unreturned boxes during this period.</p>

                <h3 id="retention-of-title-cancellation-of-the-contract-changes">4. RETENTION OF TITLE, CANCELLATION OF THE CONTRACT, CHANGES</h3>
                <p>We reserve title to the goods until full payment of the purchase price. In case of behavior contrary to the contract, especially if you fail to meet your payment obligations in spite of a reminder from us, we reserve the right to withdraw from the contract and demand the return of the merchandise held by you within a reasonable given deadline. In this case we are entitled to recycle the returned goods upon their receipt. We reserve the right to decline a contract after a negative result of a credit check. Purchased gift vouchers can not be returned.
                Delivery slot changes are possible only 2 working days before the chosen delivery day. Delivery slot changes are generally not possible for X-Press orders.</p>

                <h3 id="maturity-and-payment">5. MATURITY AND PAYMENT</h3>
                <p>We only accept the methods of payment that were indicated in the framework of the ordering process. The purchase price and any applicable shipping costs are due upon conclusion of the contract.</p>

                <p>Unless otherwise agreed, invoices are payable within 20 days. We may request a prepayment without stating reasons. The order will be processed after receipt of the payment.
                Our partner CembraPay AG  manages the billing process for us. If you chose payment on bill the terms and conditions of CembraPay AG  are applicable: CembraPay AG</p>

                <p>Reimbursements and deposits are automatically refunded to the Farmy credit account, unless otherwise requested by the customer.</p>

                <p>Vouchers can be redeemed only on the terms indicated on the voucher. It is not permissible to sell coupons or coupon codes without prior written consent from us. When paying with a voucher, any possible remaining balance is credited to the account and automatically credited with the next order.
                The accumulation of actions, coupons and discount codes is not possible.</p>

                <h3 id="warranty-and-liability">6. WARRANTY AND LIABILITY</h3>
                <p>If the goods are deficient at the time of delivery, e.g. manufacturer error, or there is a wrong delivery, we will provide a replacement delivery if possible or a reimbursement. 
                Our liability for own negligence and that of our employees, legal representatives and agents is limited to intent.
                In the rarest cases where a product A is not available from a producer A in quality A, we allow us to buy the product A from a producer B in the quality A so that you receive a complete order. If you do not agree to the exchange, please contact our customer care for a reimbursement
                Farmy is responsible to deliver on the selected delivery day. A delivery within the selected delivery window cannot always be guaranteed due to traffic jams, etc. If the delivery arrives outside of delivery slot, you may refuse the delivery and ask for reimbursement.</p>

                <p><a name="datenschutz"></a></p>

                <h3 id="addresses">7. ADDRESSES</h3>

                <p>Suppliers and contractors of the offers on these sites:
                Farmy AG 
                Buckhauserstrasse 28
                8048 Zurich</p>

                <p>Address to send returns to:
                Farmy AG 
                Buckhauserstrasse 28
                8048 Zurich</p>

                <h3 id="data-protection--privacy-policy">8. DATA PROTECTION / PRIVACY POLICY</h3>
                <p>We will use the data you have provided solely to complete and process your order. Your data is transferred to the delivering shipping company, provided it is necessary for delivery of the goods. For the settlement of payments your payment data is transmitted to our bank. A transfer of your data to other third parties or the use for advertising purposes does not take place. Upon completion of the contract and full payment your data will be blocked from further use and deleted after the statutory retention period. Using technical and organisational measures, we secure our website and other systems against loss, destruction, access, modification or processing of your data by unauthorised persons. Despite regular checks, complete protection against all dangers is not possible.
                According to the Federal Data Protection Act (DSG) you have a right to free information about your stored data (article 8 DSG) and a right of correction (article 5, para. 2 DSG). Requests for information may also be sent in electronic form to the competent office. For questions regarding the procurement and processing of your personal data and for information and correction requests, please contact our customer care.</p>

                <p><a name="locationdata"></a></p>

                <p>You can visit our website without disclosing any personal information. We only store data without reference to individuals - for example, the name of your Internet Service Provider, the site from which you have visited us, or the name of the file requested. This data is exclusively used to improve and evaluate our offer and is not traceable to you. Personal data is only collected if provided voluntarily in the context of ordering, when opening an account or registering for our newsletter. We use the data you provide without your express permission solely to fulfill and process your contact inquiry. On completion of the contract and full payment, your data will be blocked from further use and deleted after the retention periods established by tax and commercial law, unless you have expressly consented to the further use of your data. When registering for our newsletter, your email address will be used for promotional purposes until you unsubscribe from the newsletter. You can unsubscribe at any time.</p>

                <p>According to the Federal Act on Data Protection (DSG) you have a right to free
                Information about your stored data (Art. 8 DSG) and a right to rectification (art. 5 para. 2 DSG). In addition, you may request your data to be deleted or blocked, insofar as it is no longer needed for contract execution. Information, blocking or deletion requests may also be sent electronically to the appropriate authority. For questions regarding the procurement and processing of your personal data and for information and correction requests, please contact our customer care.</p>

                <p>A possibly given consent to the memory of non-finalized orders can be revoked for the future.</p>

                <p><strong>Location Data</strong></p>

                <p>Our Farmy Fleet App (not available to customers) records the courier location and sends it to our internal company server in order to inform Farmy customers about the approaching delivery updates. We don’t track customer location and don’t share any location data with 3rd parties.</p>

                <p>Creditcheck</p>

                <p>In the course of order closing a creditcheck is executed by Intrum AG. The purpose of this creditcheck is to avoid credit defaults and fraud as well as prevention of over-indebtedness and unauthorized claims. For this purpose required personal information such as name, address, date of birth, contact information (email, telephone number) will be submitted to Intrum AG. Additionally Data of the internet-protocol (IP-Adress, Used Proxy Servers, etc.) will be gathered by using a script and submitted to Intrum AG. Requests for personal information stored by Intrum AG can be raised at Intrum via request for information.</p>

                <p>e-Mail-Marketing</p>

                <p>If you sign up for our newsletter, we will use the information you have provide to send you the newsletter. This agreement can be revoked at any time in the future by unsubscribing from the newsletter.
                Storage of client data
                In the event of a provided agreement for the storage of your customer data, this can be revoked at any time with future effect.</p>

                <p>Also we use the following services: 
                Google Play Services (https://policies.google.com/privacy)
                Firebase Analytics (https://firebase.google.com/policies/analytics/)
                Crashlytics (http://try.crashlytics.com/terms/privacy-policy.pdf)</p>

                <p>Cookies</p>

                <p>We use cookies on several website pages to make our website attractive and to enable the use of certain functions. These are small text files that are stored on your computer. Most of the cookies we use are deleted from your hard drive at the end of the browser session (so-called session cookies). Other cookies remain on your computer and allow us to recognize you on your next visit (so-called permanent cookies). Our partner companies are not permitted to procure or edit personal data through our website using these cookies. You may refuse the use of cookies in your browser toolbar by going into the menu “Tools&gt; Internet Options&gt; Privacy” (Internet Explorer) or “Settings&gt; Privacy” (Firefox) to limit or turn off cookies. Please note that you can not use certain features of our website without cookies. Disclosure of personal data to third parties Your information will be posted to our delivery company, to the extent necessary to deliver the goods. For settlement of payment we forward your payment data to our bank. This will process your data only to the extent to which we are permitted to process it ourselves. Furthermore, your personal information will not be disclosed to third parties.</p>

                <p>Website data analysis using Google Analytics</p>

                <p>This website uses Google Analytics, a web analysis service provided by Google Inc. (“Google”). Google Analytics uses so-called “cookies”, text files that are stored on your computer to help analyse your use of the website. The information gathered by the cookie about your use of this website is generally transmitted to and stored in a Google server in the USA. If IP anonymization is activated on this website, however, your IP address will be stored by Google in shortened form within Member States of the European Union or in other States that are contracting parties to the Agreement on the European Economic Area. Only in exceptional cases is the full IP address transmitted to a Google server in the USA and shortened there. Google will use this information on behalf of the operator of this website to evaluate your use of the website, compile reports on website activity and provide the website operator with other services related to website usage and internet activity. Google will not link the IP address transferred by your browser as part of Google Analytics with any other data held by Google. You can prevent the storage of these cookies by selecting the appropriate settings in your browser software. However, please be advised that by doing so, you may be unable to use some features of this website. You can also prevent the data generated by the cookie about your use of the website (including your IP address) from being sent to and processed by Google by downloading the browser plugin available at the following link and installing it: http://tools.google.com/dlpage/gaoptout?hl=de</p>

                <p>Credit assessments and scoring</p>

                <p>Credit checks and scoring Unless we have paid in advance, for example when making a purchase on account, we get to preserve our legitimate interests and if appropriate obtain credit information based on mathematical statistical methods from a bureau [optional: name of the bureau]. In order to effectuate this, we transmit the personal data required for a credit rating check to a relevant agency and we use the feedback information on the statistical probability of default to reach a balanced decision on the conclusion, execution or termination of the contract. The credit report can include probability values (scores), which are calculated on the basis of scientifically recognised mathematical and statistical methods. Other address information may also be taken into consideration in the calculations. Your legitimate interests will be taken into account in accordance with the legal requirements.
                If we have paid in advance, for example in the case of a purchase on account, in order to safeguard our legitimate interests, we might obtain a credit rating report from a relevant agency, drawn up using mathematical and statistical methods. In order to effectuate this, we transmit the personal data required for a credit rating check to a relevant agency and we use the feedback information on the statistical probability of default to reach a balanced decision on the conclusion, execution or termination of the contract.
                Upon request, we shall be more than happy to inform the customer as to which agencies we use for this purpose.</p>

                <p>Facebook Social Plugins</p>

                <p>On our site, so-called Social Plugins (“Plugins”) of the social network Facebook are used, which is operated by Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA (“Facebook”). The plugins are marked with a Facebook logo or the words “social plug-in from Facebook” or “Facebook Social Plugin”. You can find an overview of Facebook plugins and their appearance here: http://developers.facebook.com/plugins When you visit a page of our website that contains a social plugin, your browser makes a direct link to the Facebook servers. The content of the plugin is transferred from Facebook directly to your browser, which then embeds it into the page. Through the integrated plugin, Facebook receives the information that your browser has accessed the corresponding page of our website, even if you do not have a Facebook account or are not currently logged in to Facebook. This information (including your IP address) is transmitted from your browser directly to a Facebook server in the USA and stored there. If you are logged into Facebook, Facebook can directly link your visit to our site to your Facebook profile. If you interact with the plugins, for example press the “Like” button or make a comment, this information is also transmitted directly to a Facebook server and stored there. The information is also posted on your Facebook profile and displayed to your Facebook friends. To see the purpose and scope of data collection and the further processing and use of data by Facebook, and your rights and settings options to protect your privacy, please refer to the privacy policies of Facebook: http://www.facebook.com/policy.php If you do not want Facebook to directly associate the information gathered through our website with your Facebook account, you must log out of Facebook before visiting our website. You can also completely prevent the loading of the Facebook plug-ins by applying add-ons to your browser, for example “Facebook Blocker” (http://webgraph.com/resources/facebookblocker/).</p>

                <p>Twitter plugins (e.g. “Tweet” button)</p>

                <p>Our website uses so called social plugins from the Twitter micro-blogging service, which is operated by Twitter Inc., 1355 Market St, Suite 900, San Francisco, CA 94103, USA (“Twitter”). The plugins are marked with a Twitter logo, for example, in the form of a blue “Twitter bird”. You can find an overview of the Twitter plugins and their appearance here: https://twitter.com/about/resources/buttons When you visit a page of our website that contains a social plugin, your browser makes a direct connection to the servers of Twitter. The content of the plugin is transferred from Twitter directly to your browser, which then embeds it into the page. By means of this integration Twitter receives the information that your browser has accessed the corresponding page of our website, even if you do not have a profile on Twitter or are currently not logged in to Twitter. This information (including your IP address) is transmitted by your browser directly to a Twitter server in the USA and stored there. If you are logged in to Twitter, Twitter can link your visit to our site to your Twitter account directly. If you interact with the plugins, for example by pressing the “Tweet” button, the corresponding information is also transmitted directly to a Twitter server and stored there. The information is also published on your Twitter account and displayed to your contacts there. To see the purpose and scope of data collection and the further processing and use of data by Twitter, and your rights and settings options to protect your privacy, please refer to the privacy policies of Twitter: https://twitter.com/privacy If you do not want the data Twitter collected on our web directly assigned to your Twitter account, you must log out before you visit our website at Twitter. You can completely block the loading of plugins with add-ons for your browser, e.g. the script blocker “NoScript” (http://noscript.net/).</p>

                <h3 id="customers-reviews">9. CUSTOMERS REVIEWS</h3>
                <p>When you review a product offered by us, you grant us the exclusive and unlimited license for further use. We do not reserve the right to display a customer review shortened, modified or omitting parts even for a limited period.</p>

                <p>Customer evaluations reflect the opinion of the customer and do not necessarily reflect our opinion.</p>

                <h3 id="alcoholic-beverages">10. ALCOHOLIC BEVERAGES</h3>
                <p>Alcoholic beverages are not sold to customers under the age of 18. The customer has to confirm accordingly that he is 18 years or older during the ordering process. If this minimum age is not reached, the customer’s offer is not accepted and the contract will not be issued. The customer is obliged to provide truthful information about himself. Farmy reserves the right to request an ID card copy by mail for the determination of the age, without giving reasons.
                If your order includes goods whose sale is subject to age restrictions, we ensure that the customer has reached the minimum age requirement through the use of a reliable method involving a personal identity and age verification. The delivery person shall hand over the goods personally and only after age verification of the purchaser.</p>

                <p><a name="widerrufsrecht"></a></p>

                <h3 id="right-of-cancellation">11. RIGHT OF CANCELLATION</h3>
                <p>Cancellation of subscriptions and other orders: If a customer has set up a subscription, it must be cancelled at least 5 days before the next delivery. Cancellation and change order requests are possible if sent until two working days before delivery time. Cancellations and changes to X-Press orders are generally not possible.</p>

                <h3 id="farmy-pass">12. Farmy-Pass</h3>
                <p>PURCHASE OF FARMY HOFPASS MEMBERSHIP</p>

                <p>You must have a Farmy account to subscribe to and use the Farmy Pass. We reserve the right to accept or refuse subscriptions at our discretion. Your contract for your Farmy Pass will begin once you receive email confirmation of your Farmy Pass subscription. You may not transfer or assign your subscription or the benefits of such a subscription. You accept and acknowledge that the purchase of a Farmy Pass entitles Farmy customers to benefits and discounts when you make further purchases at Farmy.</p>

                <p>MEMBERSHIP FEE, CANCELLATION AND RENEWAL</p>

                <p>The Farmy Pass subscription fee is the price displayed on the Farmy website at the time you purchase your Farmy Pass subscription or when your subscription is renewed. This fee is non-refundable. If you wish to cancel your Farmy Pass at any other time please contact our customer support until 10 p.m. on the eve of the renewal. Your Farmy Pass subscription will be automatically renewed monthly, or every 6 or 12 months at the end of your minimum term (depending on the type of subscription you have purchased). We will contact you by email to remind you of this 7 days prior to the relevant renewal date. Unless you notify us before renewal that you wish to cancel your subscription, you understand that your subscription will automatically renew and you authorise us to collect the then-applicable subscription fee from the payment card we have on record for you. Your initial subscription to a Farmy Pass is an authorisation for us to use this payment card. If, before renewal, you decide to cancel your Farmy Pass subscription or you do not want to automatically renew, please call our customer support. Farmy reserves the right to change the subscription fee for future renewals or subscriptions from time to time. Farmy Pass subscription fee changes will not take effect until the end of the relevant minimum term and we will contact you by email giving you 7 days notice of any change in fees before they go into effect. Your continued subscription in any of the Farmy Pass subscription schemes after we change the subscription fees constitutes your acceptance of these changes and the payment card we have on record for you will be used to collect the new subscription fee. If you do not agree to any fee changes, then you must cancel your subscription by contacting our customer support. Your Farmy Pass subscription begins on the day that Farmy confirms that your subscription has been activated, and expires on the day before the date you originally purchased your Farmy Pass subscription unless such a date does not exist. If this is the case, then the renewal date is set to be the previous calendar day. For example, if your Farmy Pass subscription is due to be renewed on the 31st day of a month, there will be some instances when it will be renewed on the 30th day of a month.</p>

                <p>Farmy Hofpass holders:</p>

                <p>The Hofpass will henceforth be referred to as the Farmy Pass and can be used as before until the end of the respective Hofpass subscription. Farmy will send you a reminder email 7 days in advance regarding the renewal of your Farmy Pass.</p>

                <p>MEMBERSHIP BENEFITS</p>

                <p>By paying for your subscription, a Farmy Pass entitles you to the following benefits for all orders above CHF 159:</p>

                <p>• Deliveries at no additional cost: Your Farmy Pass subscription does not guarantee you a delivery window; if a delivery slot is found on the Farmy delivery booking page, there will be no additional delivery charge for that window. The Farmy Pass only applies to the type of deliveries offered by Farmy at the time of subscription.</p>

                <p>• Double Bonus Eggs
                • An exclusive gift for annual subsriptions”</p>

                <p>OTHER INFORMATION</p>

                <p>Your Farmy Pass subscription does not commit you to buying a set amount of products from us or receive a certain amount of deliveries; restrict the amount of products you may purchase; guarantee that the products will be in stock. A Farmy Pass subscription is covered by a fair usage policy as set out below: it may only be used by the named account holder and is not transferable. We will issue Farmy Pass subscribers with regular emails providing information about the Farmy Pass and your use of it, which you consent to receive by accepting these Terms &amp; Conditions when you sign up for subscription of the Farmy Pass. We reserve the right to change or withdraw your Farmy Pass subscription benefits (or any element of them) at any time. For those subscriptions with a minimum term, such changes will not take effect until the end of the relevant minimum term and we will contact you by email giving you 7 days notice of any such changes. In the case of subscriptions with no minimum term, Farmy will contact you by email giving you 7 days notice of any change to your subscription benefits before they go into effect. If you feel that a change to your Farmy Pass benefits is to your disadvantage, please contact our customer support. Otherwise, your continued subscription after we notify you shall constitute your acceptance of these changes and you acknowledge that your right to these benefits will cease at the end of the notice period. Farmy will not be liable for any losses resulting from any changes to, or termination or withdrawal of, any Farmy Pass benefits. All orders that make use of your Farmy Pass must meet all of Farmy’s Terms &amp; Conditions of Purchase, including any minimum purchase order requirements after the relevant Farmy Pass discounts have been deducted. It is your responsibility to inform us of any change of address and to always enter the correct address at the checkout so that we can ensure that deliveries are made to the correct address.</p>

                <p>TERMINATION</p>

                <p>Farmy reserves the right to monitor usage of the Farmy Pass service and to terminate such subscriptions (upon notice) if it believes, in its sole discretion:</p>

                <p>• the subscription is being used in breach of the fair usage policy; 
                • a customer is in breach of any other of the Terms &amp; Conditions relating to the Farmy Pass or the Farmy Terms &amp; Conditions of Purchase; or 
                • a Farmy Pass subscriber has engaged in conduct that involves fraud or misuse of a Farmy Pass subscription or is harmful to our interests.</p>

                <p>In the case of such termination by Farmy, no refund will be given. If orders are not paid for in full or a customer’s bank declines payment on a customer’s bankcard and as a result money is owing to Farmy, then Farmy reserves the right to suspend the customer’s ability to place further orders on the Farmy website until such time as the outstanding balance has been paid in full. In this event, the Farmy Pass subscriber will forfeit the use of their subscription for the period of the suspension and shall not be entitled to receive a refund of the subscription fee or an extension to the duration of their subscription. You understand that if the payment card we have on record for you is unavailable (in that we cannot successfully charge the applicable renewal fee), or if we don’t have any stored payment card details for you, then your subscription shall be automatically suspended. Your subscription shall not become active again until you change or update your payment card details to a card that can successfully be charged the applicable renewal fee. If your subscription is suspended and you are a subscriber to a monthly Farmy Pass subscription scheme, then your monthly renewal dates over the minimum term and beyond, as applicable, will remain the same when your subscription becomes active again. All subsequent orders placed following any such suspensions will be subject to Farmy’s delivery charges applicable at that time. Our failure to insist upon or enforce your strict compliance with these Terms will not constitute a waiver of any of our rights. Farmy reserves the right to make improvements or changes to these Terms &amp; Conditions at any time (including without limitation the correction of errors, omissions, inaccuracies or ambiguities and to meet legal or regulatory requirements). If we make any material changes then we will contact you by email giving you 7 days notice of any such changes. If any of these conditions shall be deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and shall not affect the validity and enforceability of any remaining condition.</p>

                <h3 id="concluding-provisions">13. CONCLUDING PROVISIONS</h3>
                <p>The provisions of the Swiss Code of Obligations apply. Zurich is the exclusive jurisdiction for all disputes arising from a contract with Farmy. We reserve the right to amend these terms and conditions at any time. The relevant legally binding version of the GTC is available on www.farmy.ch.</p>

                <h3 id="right-of-return">14. RIGHT OF RETURN</h3>

                <p>14.1. You have the right to return delivered goods within 14 calendar days upon the date of delivery. In order to abide by this cooling-off period, you must inform us before the termination of the cooling-off period that you are availing yourself of your right of return. The deadline is met when the goods are handed over to the post office or another mail-order establishment or one of our couriers on the last day of the deadline for the return. Comestible goods are excluded from the right of return.</p>

                <p>14.2. In case of an orderly return of the goods we will refund the full amount paid via credit voucher after having examined the goods. A refund is at all times carried out to the means of payment employed at the time of purchase. In case of possible refunds from purchases paid by invoice, we will refund the amount to the respective account.</p>

                <p>14.3. We can deny the refund until we have either retrieved the ware or until you have provided proof that you have returned the ware. You must return or hand over the goods immediately and in every case within 14 days at the latest starting from the day on which you have informed us about the revocation of this contract.</p>

                <h3 id="why-does-the-weight-of-certain-products-say-approximate">15. Why does the weight of certain products say “approximate”?</h3>

                <p>Some of our fresh meat and fish products are portioned by hand especially for you and natural products such as fruits and vegetables vary in weight. Therefore, the exact price is not known in advance, which is why we initially charge 10-30 % more depending on the product. As soon as the exact weight and therefore the exact price is known, the difference will of course be credited to your Farmy account or charged directly to your payment method. The basic price stated per unit of measurement applies.</p>

                <h3 id="reminder-and-collection-fees">16. Reminder and collection fees</h3>

                <p>Our partner, CembraPay, is responsible for invoicing and follow-up administration, including dunning and debt collection.</p>

                <p>CembraPay AG
                Bändliweg 20
                8048 Zürich
                Tel : 044 551 46 70
                customer-care@cembrapay.ch
                UID: CHE-100.733.936</p>

                <p>You can find Cembra Pay’s dunning and collection fees under the following link:
                https://byjuno.ch/en/1b/terms

                </p>

            </div>
            <Divider />
            <div className="text-start mb-[40px]">
                <a href="/login" className="text-[#F4991A] font-bold"><ArrowLeftOutlined /> Back</a>
            </div>
        </div>
    )
}