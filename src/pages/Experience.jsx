import {
  chakra,
  Container,
  Heading,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import React, { useState } from "react"
const Experience = () => {
  const bgColor = useColorModeValue("#94e8e7", "#00383f")
  const textColor = useColorModeValue("#000", "#ffffff")
  const iconColor = useColorModeValue("#fff", "#fff")
  const iconBg = useColorModeValue("rgb(230, 54, 5)", "rgb(230, 54, 5)")

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1)
  return (
    <Container maxW="7xl">
      <VStack mb={10} w="full" minH="100vh">
        <Heading>My Experiences</Heading>
        <Heading>
          Isaac M. Larbi,{" "}
          <chakra.span fontSize="sm" fontWeight="bold">
            Esq. LL.B.,B.L., LL.M.
          </chakra.span>
        </Heading>
        <Heading textDecoration="underline">CONTACT INFO:</Heading>
        <Heading size="md">
          THE LAW OFFICE OF ISAAC M. LARBI OKORE (EAGLE) CHAMBERS
        </Heading>
        <Text textAlign="center">
          P. O. Box KF 2792 <br /> Koforidua <br /> Office Tel/Fax: 034-202-0011{" "}
          <br />
          Cell: 026-681-3112, 027-180-0464
        </Text>
        <Text>
          Email: <Link href="info@imlarbilaw.com">info@imlarbilaw.com</Link>
          <Link href="info@imlarbilaw.com">info@imlarbilaw.com</Link>
        </Text>
        <Text>
          Website:<Link href="www.imlarbilaw.com">www.imlarbilaw.com</Link>
        </Text>
        <Heading textTransform="uppercase">Objective:</Heading>
        <Text className="text-center">
          With over twenty (20) years of legal experience as a Lawyer in
          addition to being a certified manager, coupled with a strong
          managerial background my wish is to stand to be elected as the
          President of the Eastern Region Bar and to put my experience,
          knowledge, skills, competence, and all resources available at my
          disposal to address the many bedeviling problems of the Eastern Bar
          and lawyers in general.
        </Text>
        <Heading textDecoration="underline" textTransform="uppercase">
          professional bar standing
        </Heading>
        <Heading size="md">.YEAR OF CALL TO THE GHANA BAR: 2002.</Heading>
        <Heading size="md">.STANDING AT THE GHANA BAR: 20 years.</Heading>
        <Heading textDecoration="underline" textTransform="uppercase">
          Legal Experience
        </Heading>
        <Heading size="md">
          Head of Chambers, The Law Office of Isaac M. Larbi, Okore Chambers,
        </Heading>
        <Text alignSelf="flex-start">Adweso, E/R., Ghana.</Text>
        <Text>
          Date: March 2010 till Date. <br /> • Specializing in Commercial Law,
          Property Law, Oil and Gas Law, Immigration Law and General Legal
          Practice. <br /> • Been involved in numerous land mark cases across
          the country and consults on areas such as Commercial Transactions,
          Trade and Investment, Mining, Oil and Gas Contracts, etc. <br /> •
          International Litigation and Representation of Clients including 2016
          and 2017Appearance before the Africa Union Administrative Tribunal,
          Addis Ababa, Ethiopia. • Barrister and Solicitor to the Supreme Court
          of Ghana.
        </Text>
        <Heading size="md">
          Legal Expert/Consultant, Gerson Lerhman Group, New York, USA.
        </Heading>
        <Text>
          Date 2011- till date <br /> • Oil & Gas, Energy, and Mining Consultant
          Undertakes legal consultations to international clients/investors.
          <br /> • Commercial and Business Transactions Consulting <br /> •
          General Law in Ghana.
        </Text>
        <Heading size="md">
          Law Lecturer, Koforidua Technical University, Koforidua, Ghana.
        </Heading>
        <Text>
          Date: August 2009 to September, 2011 <br /> Law of Contract, Agency
          Law, Business Law, Commercial Law, Purchasing and Supply Law,
          Hospitality Law, Company Law.
        </Text>
        <Heading size="md">
          Associate Lawyer, Yaw Barimah & Co, Afisem Chambers, Koforidua, Ghana.
        </Heading>
        <Text>
          Date: March 2009 to March 2010. <br /> • General Legal Practitioner
          <br /> • Consulting in areas such as Land Law, Property Law, Mining
          and Environmental Litigation, Criminal Defense, Family/Matrimonial
          Cases, Employment Litigation, Accident/Insurance Claims, etc.
        </Text>
        <Heading size="md">
          Contract Attorney, Update Legal, Washington, DC, USA. (Part Time)
        </Heading>
        <Text>
          Date: February 2005 – January 2008. <br /> • Negotiating and Preparing
          Contracts/Agreements.
          <br /> • Document review of client legal materials, preparing various
          motions, pleadings, conducting legal checks. <br /> • Completing form
          letters and documents for attorneys, editing, proof reading, coding,
          labeling, etc.
        </Text>
        <Heading size="md">
          Legal Consultant, African Community Council, Washington, DC, USA.
          (Part Time)
        </Heading>
        <Text>
          Date: January 2004 – 2008. <br /> • Drafting Constitution and Articles
          of Incorporation. <br /> • The Mission and Mandate document. <br /> •
          Drafting Bye-Laws. <br /> • Registration and Incorporation.
        </Text>
        <Heading size="md">
          Legal Researcher, The Center for International Policy, Washington, DC,
          USA.
        </Heading>
        <Text>
          Date: July 2003 – December, 2005. <br /> • Researching and drafting
          memos on issues of corruption, money laundering, bribery, and economic
          crimes. <br /> • Writing legal analysis on effects of domestic and
          international economic crimes on developing economies. <br /> •
          Identifying U.S. anti-money laundering laws lacking enforcement and
          making necessary recommendations.
        </Text>
        <Heading size="md">
          Research Fellow, War Crimes Research Office, American University
          Washington College of Law, Washington D.C,
        </Heading>
        <Text>
          Date: August 2002 – December 2003. <br /> • Research focused on The
          Human Rights Committee, The European Human Rights Court, The
          Inter-American Human Rights Court & Commission, The African Human
          Rights System. <br /> • Researching on legal issues in public
          international law, humanitarian law, human rights, and international
          criminal law for clients such as International Criminal Tribunal for
          Yugoslavia (ICTY), International Tribunal for Rwanda (ICTR), the
          Special Court for Sierra Leone. <br /> • Ascertaining domestic legal
          standards acceptable in international. <br /> • human rights law and
          its applicability in international criminal prosecutions. • Conducted
          Internet assisted legal research including the use of Westlaw and
          Lexis-Nexis.
        </Text>
        <Heading textTransform="uppercase">Other legal Experience</Heading>
        <Heading size="md">
          POSITION: International Judge Phillip C. Jessup International Law Moot
          Court Competition, Washington, DC USA.
        </Heading>
        <Text>
          Date: March – April 2004. <br /> • Judged four oral rounds and two
          legal memos in the competition which involved over 94 countries
          worldwide.
        </Text>
        <Heading size="md">
          POSITION: International Judge Phillip C. Jessup International Law Moot
          Court Competition, Washington, DC USA.
        </Heading>
        <Text>
          Date: March – April 2003. <br /> • Judged four oral rounds and two
          legal memos in the competition which involved over 94 countries
          worldwide.
        </Text>
        <Heading textTransform="uppercase" textDecoration="underline">
          LEGAL EDUCATION & TRAINING:
        </Heading>
        <Heading size="md">
          1. LL.M. (Master of Laws) in International Legal Studies, American
          University Washington College of Law, Washington, DC, USA (December
          2003).
          <br />
          2. Barrister – at - Law, Ghana School of Law, Accra, (October 2002).
          <br />
          3. LL.B. (Bachelor of Laws), University of Ghana, Faculty of Law,
          Accra, (June 2000).
        </Heading>
        <Heading textTransform="uppercase" textDecoration="underline">
          ARTICLES AND WRITE - UPS:
        </Heading>
        <Heading size="lg" alignSelf="flex-start">
          PUBLISHED ARTICLE:
        </Heading>
        <Text>
          “International Treaty Obligations v International War Crimes;
          Analyzing United States Article 98 Agreements of the International
          Criminal Court in the Context of International Legal Principles.” Eyes
          On The ICC Journal, Vol. 1 No. 1, 177 (2004).
        </Text>
        <Heading size="lg" alignSelf="flex-start">
          UNPUBLISHED ARTICLES (COMPLETED)
        </Heading>
        <Text>
          THE CONCEPT OF SOVEREIGN IMMUNITY UNDER CONTEMPORARY INTERNATIONAL LAW
          AND THE DOMESTIC ENFORCEMENT OF UNIVERSAL JURISDICTION. (37 Pages.)
          <br />
          DETERMINING THE ADEQUACY OF THE ALTERNATIVE FORUM IN FORUM NON
          CONVENIENS MOTIONS IN INTERNATIONAL LITIGATION; AN ANALYSIS OF RECENT
          DECISIONS. (24 Pages.)
          <br />
          FINANCING AFRICA'S DEVELOPMENT; IDENTIFYING NEW STRATEGIES UNDER THE
          NEW PARTNERSHIP FOR AFRICA'S DEVELOPMENT (NEPAD). (33 Pages.)
        </Text>
        <Heading size="lg" alignSelf="flex-start">
          SHORT WRITE-UPS:
        </Heading>
        <Text>
          • Why I think the Petition against the Assin North MP ought to be
          thrown out.” Opinion published on www.awakenewsroom.com, 4 January
          2021. <br /> • “Lawyer Isaac Larbi Writes: Personal Rights vs. Public
          Rights, the Case of the EC Chair.” Opinion published on
          www.mybrytfmonline.com, 10 February, 2021. <br /> • “The Hullabaloo of
          an ID, is a Birth Certificate an ID?” Opinion published on
          www.mybrytfmonline.com, 20 July 2020. <br /> ▪ “COVID-19 and the
          Impact of the Lock Down on Legal Rights; did the Supreme Court miss an
          opportunity?” Opinions of Monday, 4 May 2020, www.ghanaweb.com. <br />
          • “The African Dream And The African Destiny; A Response to the
          Critics of African Unity.” Opinion published on www.ghanaweb.com, 17
          August 2002.
        </Text>
        x<Heading size="lg">INTERNATIONAL LEGAL EDUCATION PROGRAMS:</Heading>
        <Text>
          • “Myths and Reality: The Legal Aspects of Modern Peacekeeping” at the
          Lester B. Pearson Canadian International Peacekeeping Training Center,
          Nova Scotia, Canada. October 2001. <br /> • “Reconciliation,
          Transformation and Justice” organized by the Global Alliance for
          Justice Education, Durban, South Africa. December 2001. <br /> •
          “Legal English and Orientation in US Legal System” the International
          Law Institute, Washington, DC, USA, July 2002. August 2002.
        </Text>
        <Heading>RECOGNITIONS.</Heading>
        <Heading size="md" alignSelf="flex-start">
          Financial Times Book Recognition/Award:
        </Heading>
        <Text>
          • Acknowledged as a Legal Research Officer for The Book titled
          “Capitalism Achilles Heels” published by Raymond Baker of the
          Brookings Institute and the Center for International Policy in
          Washington DC, USA. <br /> • The same Book was voted by The Financial
          Times of USA as “One of the Best Business Books in the Year 2005”.
        </Text>
        <Heading>HONORS.</Heading>
        <Text>
          • Selected to Appear in the American University Washington College of
          Law LLM. International Brochure at two different pages. <br /> •
          Selected to Appear in the Front Page of the American University
          Washington College of Law International Multiple Flyer comprising
          prominent graduates of the school holding offices as Ministers,
          Ambassadors, Presidents in their respective countries. <br /> •
          Honoured to be invited to a VIP Dinner with H.E. Collin Powell, the
          First Black and the Former US Secretary of State, in Washington, DC,
          USA, April 2005. <br /> • Honoured to meet H.E. Gen. Obasanjo, former
          AU Chairman and President of the Republic of Nigeria, Washington, DC,
          USA, April 2005. <br /> • Honoured to meet the Wife of H. E. Collin
          Powell. <br /> • Honoured to meet Congresswoman Jackson Lee, US
          Representative for Texas 18th District since 1995. <br /> • Honoured
          to meet Rev. Jesse Jackson, a US Black Political Activist and Baptist
          Minister.
        </Text>
        <Heading>AWARDS.</Heading>
        <Text>
          • Academic Consortium Certificate of Excellence, Office of the
          Prosecutor, Special Court for Sierra Leone, October, 2003.
        </Text>
        <Heading>SCHOLARSHIPS.</Heading>
        <Text>
          • 2002 Dean Grossman Scholarship in International Law, American
          University Washington College of Law. Awarded in October 2002. <br />•
          ILSP International Law Scholarship, American University Washington
          College of Law, Washington, DC. Awarded April 2002.
        </Text>
        <Heading>PROFESSIONAL MEMBERSHIPS:</Heading>
        <Heading>MEMBER, AMERICAN SOCIETY OF INTERNATIONAL LAW.</Heading>
        <Heading size="md">ACHIEVEMENTS:</Heading>
        <Text>
          ◦ Participated in the International Conference in 2003. <br /> ◦
          Participated in the International Conference in 2004.
        </Text>
        <Heading>MEMBER, GHANA BAR ASSOCIATION.</Heading>
        <Heading size="md">ACHIEVEMENTS:</Heading>
        <Text>
          • 20 years standing as a Lawyer. <br /> • Established The Law Office
          of Isaac M. Larbi, Okore Chambers, a private law firm in March 2010
          <br /> • Proposed about 10 themes for the Annual Lawyers Conference in
          2018. <br /> • Provided the theme for the 2018 Annual Lawyers
          Conference. <br /> • Submitted a Legal Memo in May 2019 to Parliament
          regarding the proposed amendment to the Legal Profession Act which was
          received and acknowledged. <br /> • International law suit on behalf
          of my client from Cameroun against the African Peer Review Mechanism
          (APRM) of the African Union. <br /> • 2016 and 2017 Appearance before
          the Africa Union Administrative Tribunal, Addis Ababa, Ethiopia for
          trial. <br /> • Obtained judgment against the African Union APRM in
          favour of my client in 2017. <br /> • Judgment obtained in the Supreme
          Court of Ghana and same reported in the Ghana Monthly Judgments, (Part
          137 GMJ) May 2019.
        </Text>
        <Heading>EXTRA-CURRICULAR ACTIVITY:</Heading>
        <Heading size="md">
          President, Student Representatives' Council, Ghana School of Law, 2002
        </Heading>
        <Heading size="md">
          ACHIEVEMENTS AS SRC PRESIDENT OF THE GHANA SCHOOL LAW.
        </Heading>
        <Text>
          ◦ Registered the Ghana School of Law to become a member of the
          International Law Students Association to enable the Law School
          participate in the Jessup Moot Court. <br /> ◦ Put together a team of
          Lecturers, Practicing Lawyers, and Judges to select students to
          represent Ghana at the Jessup Moot Court in Washington DC. <br /> ◦
          Liaised with the Ministry of Foreign Affairs to obtain US visas for
          all the five (5) team members from the Law School without going for
          Visa interview at the American Embassy. <br /> ◦ Applied for and
          obtained a grant of US$500.00 in 2002 from the George Washington
          University to support the team from the Law School to participate in
          the Jessup Moot Court Competition. <br /> ◦ Ensured Ghana's
          participation in the Jessup Moot Court Competition for the first time
          in the history of the Law School in March 2002. <br /> ◦ The Jessup
          Moot Court Competition is a permanent legacy of my administration as
          the SRC President. <br /> ◦ Ensured the publication of the Ghana
          School of Law Journal in 2002 after a very long period of hiatus.{" "}
          <br /> ◦ Organized the Law Week Celebration as required during my
          administration with the infusion of cultural activities for the first
          time during the opening ceremony.
        </Text>
        <Heading>MANAGEMENT EXPERIENCE</Heading>
        <Heading>LEGAL MANAGEMENT</Heading>
        <Heading>
          Owner / Director / Head of Chambers, The Law Office of Isaac M. Larbi,
          Okore Chambers, Adweso, E/R.
        </Heading>
        <Text>
          Date: March 2010 till Date. Professional Law Firm practicing
          throughout the southern sector of Ghana with records in profound cases
          with one case reported in Ghana Monthly Judgments, (Part 137 GMJ) May
          2019.
        </Text>
        <Heading>OTHER MANAGEMENT EXPERIENCE</Heading>
        <Text>
          • Store Manager, Sherwin Williams/Duron Paints & Wallcoverings, Store
          3646 Germantown, Maryland, USA. Sherwin Williams has consistently
          ranked in the top 10 best companies to work for in America with over
          4758 branches worldwide. DATE: May 2005 - April 2007. STORE SALES
          VOLUME: US$6,000,000.00 in Sales per year. RESPONSIBILITIES. <br /> •
          Growing sales and market expansion. <br /> • Opening and growing
          commercial accounts.
          <br /> • Improving customer service. <br /> • Hiring, training &
          motivating store personnel to improve store performance. <br /> •
          Making sales related phone calls. • Account receivables, Inventory
          management. <br /> • Ordering & Receiving. <br /> • Organizing vendor
          shows, promos, and product demonstrations. <br /> • Building bulk
          displays, etc.
        </Text>
        <Heading>ACHIEVEMENTS WORKING FOR SHERWIN WILLIAMS</Heading>
        <Text>
          • Ready to be promoted and Promoted to Assistant Manager from Manager
          Trainee within Five (5) Weeks of training instead of Six Weeks. <br />{" "}
          • Promoted to Store Manager from Assistant Manager within 5 Months of
          working for the company. <br /> • Set the Record of the First Black
          Employee to be promoted to Store Manager within 5 months of employment
          never in the history of the company. <br /> • Set the record as the
          first employee to move from Manager Trainee to Assistant Manager and
          to Store Manager within Six Months of employment. <br /> • Promoted to
          manage one of the Biggest Store Volumes in terms of Sales from the
          position of Assistant Manager overcoming competitors from already
          experienced Store Managers from Smaller Volume Stores looking to
          promote to bigger volume stores. This is also the First in the history
          of the Company. <br /> • Selected to appear in the nationwide
          advertisement of the company. <br /> • As Assistant manager I was the
          go to person for all customer issues due to advanced knowledge of the
          business processes, product knowledge, service knowledge, and passed
          all Store Manager exams within 3 months never in the history of the
          company.
        </Text>
        <Heading size="md">
          Manager, Bed Bath & Beyond, Rockville, Maryland, USA. Bed, Bath and
          Beyond is one of the Big Box Companies (making millions of dollars in
          sales in a day.)
        </Heading>
        <Text>
          DATE: April 2007 to January 2008. <br /> STORE SALES VOLUME:
          US$30,000,000.00 Sales per year. RESPONSIBILITIES: <br /> • Management
          of department products.
          <br /> • Ordering and receiving products based on departmental needs.{" "}
          <br />
          • Hiring, training & motivating store personnel to improve store
          performance. <br /> • Ensuring that items are properly displayed with
          sign, price, neat and clean. <br /> • Training store associates to
          provide excellent customer service. <br /> • Front register
          supervision. • Promoting side and end cap sales. <br /> • Item ranking
          to determine slow moving items to be aggressively promoted. <br /> •
          Organizing vendor shows, promos, and product demonstrations. <br /> •
          Building bulk displays, etc.
        </Text>
        <Heading>ACHIEVEMENTS WORKING FOR BED, BATH AND BEYOND</Heading>
        <Text>
          • Promoted to Department Manager straight from training. <br /> •
          Increased Departmental Sales rapidly. <br /> • Contributed to an
          Increased Annual Sale from approx. $25,000.000.00 to $30,000.000.00 in
          a year.
        </Text>
        <Heading>MANAGEMENT TRAINING AND CERTIFICATION:</Heading>
        <Heading size="md">
          • Store Manager Certification, Sherwin Williams University, Atlanta,
          Georgia, USA Date: 23rd March, 2007. <br /> • Manager Trainee,
          Management Training Program, Sherwin Williams University, Atlanta,
          Georgia, USA. Date: 22nd July, 2005.
        </Heading>
      </VStack>
    </Container>
  )
}

export default Experience
