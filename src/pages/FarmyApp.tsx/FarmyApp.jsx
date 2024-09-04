const FarmyApp = () => {
  return (
    <div>
      <div className="w-full h-[450px] bg-img"></div>
      <div className="mx-auto max-w-4xl">
        <h3 className="text-center pt-10 text-[52px] text-[#333333] font-semibold mb-16">
          Your weekly shopping conveniently from anywhere
        </h3>
        <p className="font-[alata] text-xl">
          No more fighting for parking spaces or standing in line at the
          supermarket! Just order your super fresh, hand-picked groceries online
          – at Farmy. And with our Farmy app, all your shopping will be even
          better.
        </p>
        <br />
        <p className="font-[alata] pb-20 text-xl">
          Order fresh food and everything else you need directly from the
          producer, even when you’re on the road. It makes your life easier and
          saves a lot of time. With the Farmy app, you can do your weekly
          grocery shopping on the go. Not only does it look good, but it’s also
          user-friendly, gives you access to all the features of your account,
          and is just a click away – no matter where you are.
        </p>
      </div>

      <img
        src="https://www.farmy.ch/ct/wp-content/uploads/2022/07/EN-LP-App-Desktop.png"
        alt=""
      />

      <div className="flex gap-14 pt-20 justify-center">
        <a href="https://apps.apple.com/us/app/farmy-regional-grocery-online/id1350364208">
          <img
            width={167}
            height={47}
            src="https://www.farmy.ch/ct/wp-content/uploads/2022/07/app-store-badge-en.png"
            alt=""
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=ch.farmy.mobile.android">
          <img
            width={167}
            height={47}
            src="https://www.farmy.ch/ct/wp-content/uploads/2022/07/google-play-badge-en.png"
            alt=""
          />
        </a>
      </div>

      <p className="max-w-4xl mx-auto py-[100px] font-[alata] text-xl">
        Apple and the Apple logo are trademarks of Apple Inc., based in the U.S.
        and other countries. App Store is a trademark of Apple Inc. © Google
        Play and the Google Play logo are trademarks of Google LLC.
      </p>

      <img src="https://www.farmy.ch/ct/wp-content/uploads/2022/07/EN-Banner-Bottom-Desktop.jpg" alt="" />
    </div>
  );
};

export default FarmyApp;
