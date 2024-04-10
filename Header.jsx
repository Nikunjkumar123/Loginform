import React from 'react'
import { FaPaypal } from 'react-icons/fa';
import CountryFlag from 'react-country-flag';

const Header = () => {
  return (
    <>
    <div>
        <div class=" flex"> 
            <span class="w-5/6 flex ">
            <FaPaypal flex size={54} style={{ color: '#0070ba' }}/>
            <span class="p-5 text-blue-900">Personal</span>
            <span class="p-5 text-blue-900">Business</span>
            <span class="p-5 text-blue-900">Developer</span>
            <span class="p-5 text-blue-900 mr-44">Help</span>
            </span>
            <span class="flex flex-row" >
                <span >
                    <h1 class=" text-blue-600  font-bold py-2 px-4 rounded-full">
                        Log in
                    </h1>
                </span>
                <span class="w-7"></span>

                <span>
                    <h1 class="bg-blue-900  text-white font-bold py-2 px-4 rounded-full snap-align-none ">
                        Sign Up
                    </h1>
                </span>
            </span>

        </div>

        

        <div class="bg-blue-900 h-96 flex text-white ">            
                
                <div class="relative float-left w-2/3 text-center">
                    <h1 class="mt-28 text-5xl flex justify-center">Connect with our <br /> sales team </h1> 
                    <p>let us talk us about our payment solutions can help <br /> people to expand business</p>
                </div>
                    

                <div class=" mt-48 text-2xl">
                    <form class="p-4 border rounded-lg w-4/5 bg-white " action="submit">
                    <h1 class="text-4xl text-black mt-4">Get started</h1>
                    <h1 class="mt-2 text-black">Tell us liitle about your business so we can connect with you right people</h1>
                    <input class="mt-4 p-4 border-2 w-full" type="text" name="" id="" placeholder="first Name*"/><br />
                    <input class="mt-4 p-4 border-2 w-full" type="text" name="" id="" placeholder="last Name*"/><br />
                    <input class="mt-4 p-4 border-2 w-full" type="text" name="" id="" placeholder="work email*"/><br />
                    <input class="mt-4 p-4 border-2 w-full" type="text" name="" id="" placeholder="phone number*"/><br />
                    <input class="mt-4 p-4 border-2 w-full" type="text" name="" id="" placeholder="company Name*"/><br />
                    <input class="mt-4 p-4 border-2 w-full" type="text" name="" id="" placeholder="company website*"/><br />
                    <label htmlFor="" class="mt-4 text-black">country</label>
                    <select class=" text-black border border-gray-300  text-sm rounded-2 block w-full p-2.5  ">
                        <option selected>United States*</option>
                        <option value="US">India</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <br />
                    <label class="text-black" >"Estimate annual sales"</label>
                    <select class="text-black  border border-gray-300  text-sm rounded-2 block w-full p-2.5  ">
                        <option selected>Selected annual sales</option>
                        <option value="US">approximated sales</option>
                    </select>
                    <br />
                    <label class="text-black">"Do you already have paypal business account"</label>
                    <select class=" text-black border border-gray-300  text-sm rounded-2 block w-full p-2.5  ">

                        <option selected>Yes</option>
                        <option value="US">No</option>
                    </select>
                    <br />
                    <input type="checkbox" class="h-4 w-4"/>
                    <span class="text-black text-sm font-bold"> i had read and accepted the </span>
                    <span class="text-blue-600 text-sm font-bold">PayPal privacy policy</span><br />
                    <p class="text-sm mt-6 text-black">
                        I consonent to PayPal contacting me by phone or by email, and to sending me product or industry information relevent to my query. I know i can unsubscribe at any time
                    </p>

                    <div class="text-black flex justify-center">
                        <button class="bg-blue-700 mt-6 text-white font-bold w-48 h-9 rounded-full" type="button">
                            Submit
                        </button>

                    </div>
                    <div class="text-black mt-6 flex justify-center"><h1>*Required fields</h1></div>
                    
                    </form>
                </div>
                

        </div>



        <div class=" mt-28   mx-24 text-2xl w-4/5">
            
                <span class=" font-bold">Some other ways to <br /> connect with us</span>
                <br />
                <br />
                <span>Want to speak with Sales right away?</span>
                <br />
                <span class="text-blue-600 font-bold ">
                    Call 877-794-7639
                </span>
                <br /><br />
                <span>Need help with your existing account</span>
                <br />
                <span class="text-blue-600 flex font-bold">Visit our help center<svg class="h-8 w-8 text-blue-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg></span>
                <br /><br />
                <span></span>Want helpful business indsights?
                <br />
                <span class="text-blue-600 font-bold flex">
                    Visit our Business Resource Center<svg class="h-8 w-8 text-blue-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
                </span>
                

            
        </div>
        
    </div>
    <h1 class="h-72">

    </h1>

    
    <div class=" flex h-72 mt-96">
        <div class="text-left w-2/4  ">
            <span class=" text-blue-600 font-bold ">Small-to medium business</span> <hr />
            <div class="flex mt-4">
                <div class="w-72 font-bold">
                    <h1>Introduction</h1>
                    <h1 class="mt-4">Getting started</h1>
                </div>

                <div>
                    <h1 class="font-bold">All Solutions</h1>
                    <h1 class="mt-4">Accept Payments</h1>
                    <h1>Make Payments</h1>
                    <h1>Manage Risk</h1>
                    <h1>Accelerate Growth</h1>
                    <h1>Streamline Operations</h1>
                </div>
            </div>
        </div>
        <div class=" w-1/3 ">
            <span class="text-blue-600  font-bold  ">Enterprise</span><hr />
            <div class="flex w-96 mt-4">
                <div class="font-bold">
                    <h1>Introduction</h1> 
                    <h1 class="text-nowrap mt-4"> marketplace & Parteners</h1> 
                </div>
                <div class="mx-6">
                    <h1 class="font-bold text-nowrap">Platform & Solutions</h1>
                    <h1 class="mt-4">Accept Payments</h1>
                    <h1>Make Payments</h1>
                    <h1>Manage Risk</h1>
                    <h1>Accelerate Growth</h1>
                    <h1>Streamline Operations</h1>
                </div>
            </div>
        </div>
        <div class=" w-44 ">
            <div class="text-blue-600 font-bold  ">More</div><hr />
            <div class="mt-4 font-bold">
                <h1 class="mt-4">Non-profits</h1>
                <h1 class="mt-4">Pricing</h1>
                <h1 class="mt-4">Resource-Center</h1>
            </div>
        </div>
    </div>


    <div class="flex font-bold h-20">
        <FaPaypal flex size={54} style={{ color: '#0070ba' }}/> <span class="text-3xl text-blue-800">Pay</span><span class="text-3xl  text-blue-600">Pal</span>
    </div>

    <div class="">
        <div class="flex mb-3">
            <h1 class="pl-2">Help</h1>
            <h1 class="pl-6">Contact</h1>  
            <h1 class="pl-6">Fees</h1>  
            <h1 class="pl-6">Security</h1>
            <h1 class="pl-6">Apps</h1>
            <h1 class="pl-6">Shops</h1>
            <h1 class="pl-6">Enterprise</h1>
            <h1 class="pl-6">Parteners</h1>
            <h1 class="pl-6">Feedback</h1>
            <CountryFlag  countryCode="US" svg class="w-20 h-20 justify-end"/>
        </div> 
        <hr />
        <div class="flex">
            <div class="flex mt-3 w-2/3 ">
                <h1 class="pl-2">About</h1>
                <h1 class="pl-6">NewRoom</h1>  
                <h1 class="pl-6">jobs</h1>  
                <h1 class="pl-6">Investor Relation</h1>
                <h1 class="pl-6">Valuation In Action</h1>
                <h1 class="pl-6">Public Policy</h1>
                <h1 class="pl-6">SiteMap</h1>
            </div>
            <div class="flex mt-3 justify-end">
            <h1 class="pl-2 flex"><svg class="h-8 w-8 text-neutral-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <path d="M14.5 9a3.5 4 0 1 0 0 6" /></svg>1999-2022</h1>
            <h1 class="pl-6">Accessibility</h1>
            <h1 class="pl-6">Privacy</h1>
            <h1 class="pl-6">Cookies</h1>
            <h1 class="pl-6">Legal</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header