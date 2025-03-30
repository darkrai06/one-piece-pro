import React from "react";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center py-10 px-4">
        <Helmet>
                        <title>FAQ | One Piece</title>
                      </Helmet>
      <h1 className="text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="w-full max-w-2xl">
        <div className="join join-vertical w-full">
          
          {/* Question 1 */}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              ✈️ How do I choose the best travel destination?
            </div>
            <div className="collapse-content">
              <p>It depends on your interests! If you love adventure, consider **mountains and trekking**. For relaxation, go for **beaches or wellness retreats**. Our blog has detailed guides to help you decide.</p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              🏨 What are the best budget-friendly travel tips?
            </div>
            <div className="collapse-content">
              <p>To save money, book flights early, travel during the off-season, use public transport, and stay in hostels or **Airbnb**. Check out our budget travel guides for more tips!</p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              🌎 How do I start a travel blog like this?
            </div>
            <div className="collapse-content">
              <p>Start by choosing a niche, setting up a **WordPress** or **Blogger** site, and writing engaging travel stories. Our blog has a step-by-step guide to help you launch!</p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              📷 What camera gear do you recommend for travel blogging?
            </div>
            <div className="collapse-content">
              <p>If you're a beginner, a **smartphone with a good camera** works fine. For professionals, we recommend a **DSLR or mirrorless camera** and a **lightweight tripod**.</p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              🌍 Do I need travel insurance?
            </div>
            <div className="collapse-content">
              <p>Absolutely! Travel insurance covers **medical emergencies, trip cancellations, and lost baggage**. We recommend researching different plans before booking your trip.</p>
            </div>
          </div>

          {/* Question 6 */}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium">
              🗺️ How do I find hidden gems while traveling?
            </div>
            <div className="collapse-content">
              <p>Avoid tourist traps by **talking to locals, exploring side streets, and using travel forums** like Reddit or Couchsurfing. Our blog highlights **off-the-beaten-path destinations**!</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
