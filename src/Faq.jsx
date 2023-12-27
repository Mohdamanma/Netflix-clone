

import { Accordion } from 'flowbite-react';

function Faq() {
    return (
        <Accordion className="bg-red m-10  ">
            <Accordion.Panel>
                <Accordion.Title>1. How do I download movies and TV shows on the Netflix app for offline viewing?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Open the Netflix app on your device.
                        Select the title you want to download.
                        Look for the download icon (usually a downward arrow) and tap on it.
                        Once the download is complete, you can find the downloaded content in the "Downloads" section of the app.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">

                        and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title> 2. Can I use the same Netflix account on multiple devices with the app?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes, you can use the same Netflix account on multiple devices. Netflix allows simultaneous streaming on different devices based on your subscription plan. For example, the Basic plan allows streaming on one device, the Standard plan on two devices, and the Premium plan on four devices simultaneously.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>3. How do I manage my viewing history on the Netflix app?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Open the app and go to the "More" tab or menu.
                        Select "Account."
                        Under the "Profile & Parental Controls" section, click on "Viewing activity."
                        Here, you can see a list of your recently watched shows and movies. You can remove items from your history if needed.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}
export default Faq