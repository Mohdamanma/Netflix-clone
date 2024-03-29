

import { Accordion } from 'flowbite-react';

function Faq() {
    return (
        <Accordion className=" m-10">
            <Accordion.Panel>
                <Accordion.Title  className='text-white hover:text-black '>
                   1. How do I download movies and TV shows on the Netflix app for offline viewing?
                    </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 ">
                     Netflix allows users to download movies and TV shows for offline viewing on its mobile apps. Keep in mind that features and interfaces might change over time, so it's a good idea to check for any updates to the Netflix app or its policies. 
                    </p>
                    
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-white hover:text-black'> 2. Can I use the same Netflix account on multiple devices with the app?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes, you can use the same Netflix account on multiple devices. Netflix allows simultaneous streaming on different devices based on your subscription plan. For example, the Basic plan allows streaming on one device, the Standard plan on two devices, and the Premium plan on four devices simultaneously.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-white hover:text-black' >3. How do I manage my viewing history on the Netflix app?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Open the app and go to the "More" tab or menu.
                        Select "Account."
                        Under the "Profile & Parental Controls" section, click on "Viewing activity."
                        Here, you can see a list of your recently watched shows and movies. You can remove items from your history if needed.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-white hover:text-black'>4. How do I resolve issues with the Netflix homepage not loading?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                    If you're experiencing issues with the Netflix homepage, you can try clearing your browser's cache, restarting your app, or checking your internet connection. If problems persist, you may want to contact Netflix support for assistance.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-white hover:text-black'>5.Can I change my Netflix homepage language or region?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The Netflix homepage language and region are typically based on your account settings. You can adjust these settings in your account preferences.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}
export default Faq