const Footer = () => {
  return (
    <footer className="bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                        <img className="h-8 w-auto" src="https://cdn-images-1.medium.com/v2/resize:fit:1280/1*4Q6PIWw7n6bGpvEH7bDgkQ.png" alt="" />
                </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
                <div>
                    <h2 className="font-circularStdBook mb-6 text-sm font-semibold text-white">Follow us</h2>
                    <ul className="font-circularStdBook text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="https://www.instagram.com/glumos_/" className="hover:underline ">Instagram</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-circularStdBook mb-6 text-sm font-semibold text-white">Legal</h2>
                    <ul className="font-circularStdBook text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="font-circularStdBook text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Glumos. All Rights Reserved.
            </span>
        </div>
        </div>
    </footer>
  )
}

export default Footer