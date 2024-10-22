import sectionNames from "../../Utils/sections";

const loginSection = (editor) => {
  // Adding a block with an icon under the 'Style' category
  editor.BlockManager.add("my-style-block-1", {
    label: `
      <i className="fa fa-square-o" style="font-size: 40px; padding:4px;"></i> Styled Block 1
    `,
    content: `
      <div
        className="mx-auto flex w-full mt-20 flex-col justify-center px-5 pt-0 md:h-[unset] max-w-[520px] lg:px-6 xl:pl-0"
      >
        <div className="relative flex w-full flex-col pt-[20px] md:pt-0">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm mb-5 h-min max-w-full pt-8 pb-6 px-6 dark:border-zinc-800"
          >
            <p
              className="text-xl font-extrabold text-zinc-950 dark:text-white md:text-3xl"
            >
              Account Details
            </p>
            <p
              className="mb-6 mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-4 md:text-base"
            >
              Here you can change your account information
            </p>
            <label
              className="mb-3 flex cursor-pointer px-2.5 font-bold leading-none text-zinc-950 dark:text-white"
              for="name"
              >Your Name
              <p
                className="ml-1 mt-[1px] text-sm font-medium leading-none text-zinc-500 dark:text-zinc-400"
              >
                (30 characters maximum)
              </p></label
            >
            <div className="mb-8 flex flex-col md:flex-row">
              <form className="w-full" id="nameForm">
                <input
                  placeholder="Please enter your full name"
                  className="mb-2 mr-4 flex h-full w-full items-center justify-center rounded-lg border border-zinc-200 bg-white/0 px-4 py-4 text-zinc-950 outline-none dark:!border-white/10 dark:text-white md:mb-0"
                  type="text"
                  value="VBZ"
                  name="fullName"
                />
              </form>
              <button
                className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 flex h-full max-h-full w-full items-center justify-center rounded-lg px-4 py-4 text-base font-medium md:ms-4 md:w-[300px]"
                form="nameForm"
                type="submit"
              >
                Update name
              </button>
              <div
                className="mt-8 h-px w-full max-w-[90%] self-center bg-zinc-200 dark:bg-white/10 md:mt-0 md:hidden"
              ></div>
            </div>
            <p className="mb-5 px-2.5 text-red-500 md:px-9 hidden"></p>
            <label
              className="mb-3 ml-2.5 flex cursor-pointer px-2.5 font-bold leading-none text-zinc-950 dark:text-white"
              for="email"
              >Your Email
              <p
                className="ml-1 mt-[1px] text-sm font-medium leading-none text-zinc-500 dark:text-zinc-400"
              >
                (We will email you to verify the change)
              </p></label
            >
            <div className="mb-8 flex flex-col md:flex-row">
              <form className="w-full" id="emailForm" data-gtm-form-interact-id="0">
                <input
                  placeholder="Please enter your email"
                  className="mr-4 flex h-full max-w-full w-full items-center justify-center rounded-lg border border-zinc-200 bg-white/0 px-4 py-4 text-zinc-950 outline-none dark:!border-white/10 dark:text-white"
                  type="text"
                  value="vbz@gmail.com"
                  name="newEmail"
                  data-gtm-form-interact-field-id="0"
                />
              </form>
              <button
                className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 flex h-full max-h-full w-full items-center justify-center rounded-lg px-4 py-4 text-base md:ms-4 font-medium md:w-[300px]"
                type="submit"
                form="emailForm"
              >
                Update email
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
    category: sectionNames.LOGIN_SECTION,
  });

  editor.BlockManager.add("my-style-block-2", {
    label: `
      <i className="fa fa-square-o" style="font-size: 40px; padding:4px;"></i> Styled Block 2
    `,
    content: `
  <div
    data-dialog="sign-in-modal"
    className="relative mx-auto w-full max-w-[24rem] rounded-lg overflow-hidden shadow-sm"
  >
    <div className="relative flex flex-col bg-white">
      <div className="relative m-2 items-center flex justify-center text-white h-24 rounded-md bg-slate-800">
        <h3 className="text-2xl">
          Sign In Modal
        </h3>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="w-full max-w-sm min-w-[200px]">
            <label className="block mb-2 text-sm text-slate-600">
              Email
            </label>
            <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
        </div>

        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-sm text-slate-600">
            Password
          </label>
          <input type="password" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
        </div>

        <div className="inline-flex items-center mt-2">
          <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
            <span className="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </span>
          </label>
          <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="check-2">
            Remember Me
          </label>
        </div>
      </div>
      <div className="p-6 pt-0">
        <button className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Sign In
        </button>
        <p className="flex justify-center mt-6 text-sm text-slate-600">
          Don&apos;t have an account?
          <a href="#signup" className="ml-1 text-sm font-semibold text-slate-700 underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

    `,
    category: sectionNames.LOGIN_SECTION,
  });

  editor.BlockManager.add("my-style-block-3", {
    label: `
      <i className="fa fa-square-o" style="font-size: 40px; padding:4px;"></i> Styled Block 2
    `,
    content: `
  <div
    className="relative m-4 rounded-lg bg-white shadow-sm"
    data-dialog="web-3-modal"
  >
    <div className="flex items-start justify-between p-4">
      <div>
        <h5 className="text-xl font-medium text-slate-800">
          Connect Web 3.0 Wallet
        </h5>
        <p className="text-slate-500 text-sm font-light">
          Choose which card you want to connect
        </p>
      </div>
      <button
        data-ripple-dark="true"
        data-dialog-close="true"
        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            className="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
      </button>
    </div>
    <div className="relative px-4">
      <div className="mb-6">
        <p className="pt-3 text-xs uppercase text-slate-500">
          Popular
        </p>
        <button className="w-full mt-3 rounded-md flex items-center justify-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          <img
            src="https://docs.material-tailwind.com/icons/metamask.svg"
            alt="metamask"
            className="h-5 w-5 mr-2"
          />
          Connect Wallet
        </button>

        <button className="w-full mt-2 rounded-md flex items-center justify-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          <img
            src="https://docs.material-tailwind.com/icons/coinbase.svg"
            alt="metamast"
            className="h-5 w-5 mr-2 rounded-md"
          />
          Connect with Coinbase
        </button>
      </div>
      <div>
        <p className="pt-3 text-xs uppercase text-slate-500">
          Other
        </p>
        <button className="mt-3 w-full rounded-md flex items-center justify-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          <img
            src="https://docs.material-tailwind.com/icons/trust-wallet.svg"
            alt="metamast"
            className="h-5 w-5 rounded-md mr-2 border border-slate-300"
          />
          Connect with Trust Wallet
        </button>
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-between gap-2 p-4 text-blue-gray-500 mt-2">
      <p className="text-sm text-slate-500">
        New to Ethereum wallets?
      </p>
      <button className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        Learn More
      </button>
    </div>
  </div>
    `,
    category: sectionNames.LOGIN_SECTION,
  });

  editor.BlockManager.add("my-style-block-4", {
    label: `
      <i className="fa fa-square-o" style="font-size: 40px; padding:4px;"></i> Styled Block 2
    `,
    content: `
    <a className="mt-10 w-fit text-zinc-950 dark:text-white" href="/">
                <div className="flex w-fit items-center lg:pl-0 lg:pt-0 xl:pt-0"><svg stroke="currentColor"
                        fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
                        className="mr-3 h-[13px] w-[8px] text-zinc-950 dark:text-white" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z">
                        </path>
                    </svg>
                    <p className="ml-0 text-sm text-zinc-950 dark:text-white">Back to the website</p>
                </div>
            </a>
            <div
                className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
                <p className="text-[32px] font-bold text-zinc-950 dark:text-white">Sign In</p>
                <p className="mb-2.5 mt-2.5 font-normal text-zinc-950 dark:text-zinc-400">Enter your email and password
                    to sign
                    in!</p>
                <div className="mt-8">
                    <form className="pb-2"><input type="hidden" name="provider" value="google"><button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-zinc-950 py-6 dark:text-white"
                            type="submit"><span className="mr-2"><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48"
                                    enable-background="new 0 0 48 48" className="h-5 w-5" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                                    </path>
                                </svg></span><span>Google</span></button></form>
                </div>
                <div className="relative my-4">
                    <div className="relative flex items-center py-1">
                        <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                        <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                    </div>
                </div>
                <div>
                    <form novalidate="" className="mb-4">
                        <div className="grid gap-2">
                            <div className="grid gap-1"><label className="text-zinc-950 dark:text-white"
                                    for="email">Email</label><input
                                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                    id="email" placeholder="name@example.com" type="email" autocapitalize="none"
                                    autocomplete="email" autocorrect="off" name="email"><label
                                    className="text-zinc-950 mt-2 dark:text-white" for="password">Password</label><input
                                    id="password" placeholder="Password" type="password"
                                    autocomplete="current-password"
                                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                    name="password"></div><button
                                className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
                                type="submit">Sign in</button>
                        </div>
                    </form>
                    <p><a href="/dashboard/signin/forgot_password"
                            className="font-medium text-zinc-950 dark:text-white text-sm">Forgot your password?</a></p>
                    <p><a href="/dashboard/signin/email_signin"
                            className="font-medium text-zinc-950 dark:text-white text-sm">Sign in via magic link</a></p>
                    <p><a href="/dashboard/signin/signup"
                            className="font-medium text-zinc-950 dark:text-white text-sm">Don't
                            have an account? Sign up</a></p>
                </div>
            </div>
        </div>

        <p className="font-normal text-zinc-950 mt-20 mx-auto w-max">Auth Form from <a
                href="https://horizon-ui.com/shadcn-ui?ref=twcomponents" target="_blank"
                className="text-brand-500 font-bold">Horizon AI Boilerplate</a>
        </p>
    </div>
</body>

</html>
    `,
    category: sectionNames.LOGIN_SECTION,
  });

  editor.BlockManager.add("my-style-block-5", {
    label: `
      <i className="fa fa-square-o" style="font-size: 40px; padding:4px;"></i> Styled Block 2
    `,
    content: `
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>

    `,
    category: sectionNames.LOGIN_SECTION,
  });

  editor.BlockManager.add("my-style-block-6", {
    label: `
      <i className="fa fa-square-o" style="font-size: 40px; padding:4px;"></i> Styled Block 2
    `,
    content: `
      <section className=" dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
          Flowbite
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    `,
    category: sectionNames.LOGIN_SECTION,
  });

  editor.BlockManager.add("my-style-block-8", {
    label: `
      <i className="fa fa-square-o" style="font-size: 40px; padding:4px;"></i> Styled Block 2
    `,
    content: `
      <!-- component -->
<div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
    <a href="#">
        <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                </svg>
            </div>
            Ardiansyah Putra
        </div>
    </a>
    <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
            bis_skin_checked="1"></div>
        <div
            className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div className="flex flex-col p-6">
                <h3 className="text-xl font-semibold leading-6 tracking-tighter">Login</h3>
                <p className="mt-1.5 text-sm font-medium text-white/50">Welcome back, enter your credentials to continue.
                </p>
            </div>
            <div className="p-6 pt-0">
                <form>
                    <div>
                        <div>
                            <div
                                className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div className="flex justify-between">
                                    <label
                                        className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Username</label>
                                    <div className="absolute right-3 translate-y-2 text-green-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" className="w-6 h-6">
                                                    <path fill-rule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                </div>
                                <input type="text" name="username" placeholder="Username"
                                    autocomplete="off"
                                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground">
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div>
                            <div
                                className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div className="flex justify-between">
                                    <label
                                        className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Password</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="password" name="password"
                                        className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" name="remember"
                                className="outline-none focus:outline focus:outline-sky-300">
                            <span className="text-xs">Remember me</span>
                        </label>
                        <a className="text-sm font-medium text-foreground underline" href="/forgot-password">Forgot
                            password?</a>
                    </div>
                    <div className="mt-4 flex items-center justify-end gap-x-2">
                        <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                            href="/register">Register</a>
                        <button
                            className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                            type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    `,
    category: sectionNames.LOGIN_SECTION,
  });
};

export default loginSection;
