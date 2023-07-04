import {
  User,
  Info,
  Code,
  Star,
  Zap,
  Server,
  Smartphone,
  Database,
  Phone,
  Check,
  UploadCloud,
  Folder,
} from "../../assets/Icons";
const Competencies = () => {
  return (
    <div className="Competencies my-20">
      <h2
        className="text-5xl font-extrabold tracking-tighter"
        data-aos="fade-up"
      >
        Our{" "}
        <span className="pr-0.5 bg-gradient-to-r from-orange-600 to-rose-600 text-transparent bg-clip-text underlined">
          Competencies
        </span>
      </h2>
      <p className="text-gray-600 mt-4 mb-12" data-aos="fade-up">
        We are an I.T solution and services company. We consider ourselves are
        an integral part of our client's eco-system. Our Objective is to provide
        effecient services in order to maintain client's business continuity. We
        make sure to provide our assistance on all required times.
      </p>
      <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        <div
          data-aos="fade-in"
          className="card w-full h-auto p-6 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer border flex flex-col items-start gap-2"
        >
          <div className="w-12 h-12 rounded-md bg-red-600 grid place-items-center">
            <Star className="stroke-white w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mt-2">
            ERP Development
          </h3>
          <p className="text-gray-600 text-sm">
            We build custom functionality to off the shelf ERP software to meet
            your unique business model. We can automate workflows or BPM
            (Business Process Automation), solution modifications, integrate
            data imports and exports and extension by creating custom modules to
            create a platform that functions seamlessly for your business. We
            can develop a complete new Business Management System on demand.
          </p>
        </div>
        <div
          data-aos="fade-in"
          className="card w-full h-auto p-6 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer border flex flex-col items-start gap-2"
        >
          <span className="w-12 h-12 rounded-md bg-amber-600 grid place-items-center">
            <Zap className="stroke-white w-7 h-7" />
          </span>
          <h3 className="text-xl font-bold text-gray-800 mt-2">
            ERP Implementations
          </h3>
          <p className="text-gray-600 text-sm">
            We implement Custom Business and data management solutions
            throughout the entire organization with data integrity. Our
            Consultants introduce new platform to the business in a smooth and
            cost-effective experience. The implementation would mapped with
            Standard Business Processes and Domain Industry standards
          </p>
        </div>
        <div
          data-aos="fade-in"
          className="card w-full h-auto p-6 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer border flex flex-col items-start gap-2"
        >
          <span className="w-12 h-12 rounded-md bg-lime-600 grid place-items-center">
            <Database className="stroke-white w-7 h-7" />
          </span>
          <h3 className="text-xl font-bold text-gray-800 mt-2">
            Data Migrations
          </h3>
          <p className="text-gray-600 text-sm">
            Our highly skilled developers update legacy systems ensuring data
            integrity when migrating legacy data, integrating raw data silos,
            modernizing the data infrastructure, and exposing the data landscape
            to gain the benefits of data modelling, data governance and
            efficiency from a solid data migration process. We develop required
            programs to enable complete data migrations with maximum accuracy
            and quality.
          </p>
        </div>
        <div
          data-aos="fade-in"
          className="card w-full h-auto p-6 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer border flex flex-col items-start gap-2"
        >
          <div className="w-12 h-12 rounded-md bg-emerald-600 grid place-items-center">
            <Server className="stroke-white w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mt-2">
            Integration Services
          </h3>
          <p className="text-gray-600 text-sm">
            We use the centralized architecture of industry standard and fully
            adopted integrated business IT environment to ensure the scalability
            of the business by facilitating real-time data automation between
            systems. We can integrate the existing ERP system to eCommerce. We
            have the competence to develop eCommerce portal for online sales. We
            integrate payment gateway, Vendor management services, online
            product catalogue and other solutions. We can develop REST services
            for the integration
          </p>
        </div>
        <div
          data-aos="fade-in"
          className="card w-full h-auto p-6 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer border flex flex-col items-start gap-2"
        >
          <span className="w-12 h-12 rounded-md bg-cyan-600 grid place-items-center">
            <Smartphone className="stroke-white w-7 h-7" />
          </span>
          <h3 className="text-xl font-bold text-gray-800 mt-2">
            System Configurations
          </h3>
          <p className="text-gray-600 text-sm">
            We configure the ERP software with specific roles, business
            intelligence, fields, modifications, enhancement of interfaces and
            addition of specific fields and more. Our configurations ensure each
            new role is optimized for a competitive edge against other
            businesses. We are Microsoft ERP Solution Providers. We implement
            and Configure Microsoft ERP Systems like MS Axapta, MS Nav, and MS
            GP. We can also configure existing ERP system to POS and Retailing
            systems.
          </p>
        </div>
        <div
          data-aos="fade-in"
          className="card w-full h-auto p-6 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer border flex flex-col items-start gap-2"
        >
          <span className="w-12 h-12 rounded-md bg-blue-600 grid place-items-center">
            <Phone className="stroke-white w-7 h-7" />
          </span>
          <h3 className="text-xl font-bold text-gray-800 mt-2">
            Expert ERP Consultants
          </h3>
          <p className="text-gray-600 text-sm">
            We analyse the current business environment to identify
            incompatibilities of disparate systems and formulate strategies to
            integrate and migrate mission critical ERP software into a converged
            infrastructure. We consult on Business Processes. We help client
            Select ERP systems. The selections require the alignment of people,
            processes and technology to ensure that the organization is
            selecting the digital solutions that integrate into the value
            culture and support the strategic vision.
          </p>
        </div>

        <div
          data-aos="fade-in"
          className="card w-full h-auto p-6 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer border flex flex-col items-start gap-2"
        >
          <div className="w-12 h-12 rounded-md bg-violet-600 grid place-items-center">
            <UploadCloud className="stroke-white w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mt-2">
            ERP System Upgrades
          </h3>
          <p className="text-gray-600 text-sm">
            Our expert developers provide upgrades to better support older
            software applications, improve business and operations we analyse
            the systems current state, requirements for upgrade, any gaps that
            may need customization and testing to ensure the upgraded version
            functions as desired. The delivery team will walk you through a
            step-by-step methodology to enable your organization to make the
            right cultural, financial and strategic decisions when selecting
            your new technology.
          </p>
        </div>
        <div
          data-aos="fade-in"
          className="card w-full h-auto p-6 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer border flex flex-col items-start gap-2"
        >
          <span className="w-12 h-12 rounded-md bg-fuchsia-600 grid place-items-center">
            <Check className="stroke-white w-7 h-7" />
          </span>
          <h3 className="text-xl font-bold text-gray-800 mt-2">
            Tailored Solutions
          </h3>
          <p className="text-gray-600 text-sm">
            We can integrate and develop mobile application on Android and iOS
            for any business management software. We can also develop certain
            niche apps on web that can help client to have solutions that would
            otherwise not possible in the standard offering of the ERP systems.
            Our expert developers provide upgrades to better support, improve
            business operations and systems current state. We fill the gaps that
            may need customization and testing to ensure the upgraded version
            functions as desired.
          </p>
        </div>
        <div
          data-aos="fade-in"
          className="card w-full h-auto p-6 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer border flex flex-col items-start gap-2"
        >
          <span className="w-12 h-12 rounded-md bg-rose-600 grid place-items-center">
            <Folder className="stroke-white w-7 h-7" />
          </span>
          <h3 className="text-xl font-bold text-gray-800 mt-2">
            Training and Delivery
          </h3>
          <p className="text-gray-600 text-sm">
            We design the training and delivery program of the ERP system that
            fits your business plan and processes. The training services are
            custom made for the client's business. We monitor the back-end
            system functionality for bugs, potential enhancements and overall
            support of the functional integration, troubleshoot system problems,
            provide Help Desk support, Security administration, Database backup,
            manage communication and maintenance schedules.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Competencies;
