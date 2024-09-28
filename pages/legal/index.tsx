import { styled, yahooGeocitiesTheme } from "../../styles/stitches";
import Head from "next/head";
import { FunctionComponent } from "react";
import { PageProps } from "../../@types/global";
import BackNavigation from "../../components/BackNavigation";
import Link from "../../components/Link";

const NAME = "Spencer's Personal Website";
const DESCRIPTION = "Legal details for Spencer's Personal Website.";

const PageDiv = styled("div", {
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "10px 20px 0",
    color: "$onBackground",
    [`.${ yahooGeocitiesTheme } &`]: {
        marginBottom: "180px"
    }
});
const Heading = styled("h2", {});
const P = styled("p", {});

const Legal: FunctionComponent<PageProps> = ({ theme }) => {
    return (
        <>
            <Head>
                <title>{NAME}</title>
                <link rel="canonical" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/legal` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="true" />
                <meta property="og:site_name" content={ NAME } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ NAME } />
                <meta property="og:url" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/legal` } />
                <meta property="og:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ NAME } />
                <meta name="twitter:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
            </Head>
            <PageDiv>
                <BackNavigation to="/" />
                <Heading>Privacy Policy TL;DR</Heading>
                <P>Last summarized: April 09, 2023</P>
                <P>This Website uses your browser&apos;s localStorage to persist some information between visits (such as the last time you visited, a UUID (Unique User ID), theme preferences, and puzzle answers).</P>
                <P>The UUID (generated using <code>crypto.randomUUID()</code> in the browser) only leaves the browser during puzzle answer submission, so I have insight into how many different people are solving puzzles. This UUID is stored only if you are the first person to correctly solve a puzzle.</P>
                <P>If you would like to have some name associated with your puzzle statistics, send me an email with the preferred display and the UUID from your localStorage and I can make any solves credited to you use the name you prefer.</P>
                <Heading>Privacy Policy</Heading>
                <P>Last updated: April 09, 2023</P>
                <P>This Privacy Policy describes My policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</P>
                <P>By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <Link href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/">Free Privacy Policy Generator</Link>.</P>
                <Heading as="h2">Interpretation and Definitions</Heading>
                <Heading as="h3">Interpretation</Heading>
                <P>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</P>
                <Heading as="h3">Definitions</Heading>
                <P>For the purposes of this Privacy Policy:</P>
                <ul>
                    <li>
                        <P><strong>Website</strong> (referred to as either &quot;the Website&quot;, &quot;I&quot; or &quot;Me&quot; in this Agreement) refers to Spencer Carver&apos;s Website, accessible from <Link href="https://spencer.carvers.info">https://spencer.carvers.info</Link></P>
                    </li>
                    <li>
                        <P><strong>Country</strong> refers to: New York,  United States</P>
                    </li>
                    <li>
                        <P><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</P>
                    </li>
                    <li>
                        <P><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</P>
                    </li>
                    <li>
                        <P><strong>Service</strong> refers to the Website.</P>
                    </li>
                    <li>
                        <P><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Website. It refers to third-party companies or individuals employed by the Website to facilitate the Service, to provide the Service on behalf of the Website, to perform services related to the Service or to assist the Website in analyzing how the Service is used.</P>
                    </li>
                    <li>
                        <P><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</P>
                    </li>
                    <li>
                        <P><strong>You</strong> means the individual accessing or using the Service, or the Website, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</P>
                    </li>
                </ul>
                <Heading as="h2">Collecting and Using Your Personal Data</Heading>
                <Heading as="h3">Types of Data Collected</Heading>
                <Heading as="h4">Personal Data</Heading>
                <P>While using my Service, I may ask You to provide Me with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</P>
                <ul>
                    <li>Usage Data</li>
                </ul>
                <Heading as="h4">Usage Data</Heading>
                <P>Usage Data is collected automatically when using the Service.</P>
                <P>Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of my Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</P>
                <P>I may also collect information that Your browser sends whenever You visit my Service or when You access the Service by or through a mobile device.</P>
                <Heading as="h4">Tracking Technologies and Cookies</Heading>
                <P>I do not use Cookies or similar tracking technologies on my Service.</P>
                <P>I use persistent localStorage for the purposes set out below:</P>
                <ul>
                    <li>
                        <P><strong>Identification Settings</strong></P>
                        <P>Type: localStorage</P>
                        <P>Administered by: Me</P>
                        <P>Purpose: These Settings allow me to associate puzzle answer submissions to a unique, anynomous, identifier.</P>
                    </li>
                    <li>
                        <P><strong>Functionality Settings</strong></P>
                        <P>Type: localStorage</P>
                        <P>Administered by: Me</P>
                        <P>Purpose: These Settings allow Me to remember choices You make when You use the Website, such as remembering your theme preference. The purpose of these Settings is to provide You with a more personal experience and to avoid You having to re-select your preferences every time You use the Website.</P>
                    </li>
                </ul>
                <Heading as="h3">Use of Your Personal Data</Heading>
                <P>The Website may use Personal Data for the following purposes:</P>
                <ul>
                    <li>
                        <P><strong>To provide and maintain my Service</strong>, including to monitor the usage of my Service.</P>
                    </li>
                    <li>
                        <P><strong>To manage Your requests:</strong> To attend and manage Your requests to Me.</P>
                    </li>
                    <li>
                        <P><strong>For other purposes</strong>: I may use Your information for other purposes, such as data analysis, identifying usage trends and to evaluate and improve my Service and your experience.</P>
                    </li>
                </ul>
                <P>I may share Your personal information in the following situations:</P>
                <ul>
                    <li><strong>With other users</strong>: I will show aggregated, anynomized data from user submissions on portions of the Website.</li>
                    <li><strong>With Your consent</strong>: I may disclose Your personal information for any purpose with Your consent.</li>
                </ul>
                <Heading as="h3">Retention of Your Personal Data</Heading>
                <P>The Website will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. I will retain and use Your Personal Data to the extent necessary to comply with my legal obligations (for example, if I am required to retain your data to comply with applicable laws), resolve disputes, and enforce my legal agreements and policies.</P>
                <P>The Website will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of my Service, or I am legally obligated to retain this data for longer time periods.</P>
                <Heading as="h3">Transfer of Your Personal Data</Heading>
                <P>Your information, including Personal Data, is processed at the Website&apos;s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</P>
                <P>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</P>
                <P>The Website will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</P>
                <Heading as="h3">Delete Your Personal Data</Heading>
                <P>You have the right to delete or request that I assist in deleting the Personal Data that I have collected about You.</P>
                <P>My Service may give You the ability to delete certain information about You from within the Service.</P>
                <P>You may delete Your information at any time by clearing your browser&apos;s localStorage. You may also contact Me to request access to, correct, or delete any personal information that You have provided to Me.</P>
                <P>Please note, however, that I may need to retain certain information when I have a legal obligation or lawful basis to do so.</P>
                <Heading as="h3">Disclosure of Your Personal Data</Heading>
                <Heading as="h4">Law enforcement</Heading>
                <P>Under certain circumstances, the Website may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</P>
                <Heading as="h4">Other legal requirements</Heading>
                <P>The Website may disclose Your Personal Data in the good faith belief that such action is necessary to:</P>
                <ul>
                    <li>Comply with a legal obligation</li>
                    <li>Protect and defend the rights or property of the Website</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>Protect the personal safety of Users of the Service or the public</li>
                    <li>Protect against legal liability</li>
                </ul>
                <Heading as="h3">Security of Your Personal Data</Heading>
                <P>The security of Your Personal Data is important to Me, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While I strive to use commercially acceptable means to protect Your Personal Data, I cannot guarantee its absolute security.</P>
                <Heading as="h2">Children&apos;s Privacy</Heading>
                <P>My Service does not address anyone under the age of 13. I do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Me with Personal Data, please contact Me. If I become aware that I have collected Personal Data from anyone under the age of 13 without verification of parental consent, I take steps to remove that information from my servers.</P>
                <P>If I need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, I may require Your parent&apos;s consent before I collect and use that information.</P>
                <Heading as="h2">Links to Other Websites</Heading>
                <P>My Service may contain links to other Websites that are not operated by Me. If You click on a third party link, You will be directed to that third party&apos;s site. I strongly advise You to review the Privacy Policy of every site You visit.</P>
                <P>I have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</P>
                <Heading as="h2">Changes to this Privacy Policy</Heading>
                <P>I may update my Privacy Policy from time to time. I will notify You of any changes by posting the new Privacy Policy on this page.</P>
                <P>I will let You know via a prominent notice on my Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</P>
                <P>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</P>
                <Heading as="h2">Contact Me</Heading>
                <P>If you have any questions about this Privacy Policy, You can contact me:</P>
                <ul>
                    <li>By email: contact@carvers.info</li>
                </ul>
            </PageDiv>
        </>
    );
};

export default Legal;
