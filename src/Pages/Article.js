// components/ArticlePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Adsense from './Adsense';
import ArticleSidebar from './ArticleSidebar';
// import ArticleSidebar from './ArticleSidebar';
// import { Helmet } from 'react-helmet-async';


const articles = [
    {
        id: 1,
        author: "Itel",
        title: 'The Future of Mobile Technology',
        content: `
      <p class="mb-6">Mobile technology hasundergone a remarkable evolution over the past few decades, revolutionizing the way we communicate, work, and navigate daily life. From the introduction of the first cell phones to the era of smartphones and beyond, the trajectory of mobile technology has been marked by innovation and rapid advancement. As we look to the future, the landscape of mobile technology is poised for further transformation, driven by emerging trends and cutting-edge developments. This article explores the exciting possibilities and potential challenges shaping the future of mobile technology.</p>
      <h2 class="text-lg font-semibold my-4">Emerging Technologies :</h2>

      <h3 class="text-base text-start font-semibold my-4">5G Connectivity:</h3>

      <p class="mb-6">One of the most anticipated advancements in mobile technology is the widespread adoption of 5G networks. Offering significantly faster speeds and lower latency than its predecessors, 5G has the potential to revolutionize how we connect and interact with the world around us. From streaming high-definition content on the go to powering immersive virtual reality experiences, 5G technology promises to unlock new possibilities for mobile applications and services.</p>
      
      <h3 class="text-base text-start font-semibold my-4">Internet of Things (IoT):</h3>
      <p class="mb-6">The Internet of Things (IoT) is another transformative trend reshaping the mobile landscape. By connecting everyday objects to the internet, IoT devices enable seamless communication and data exchange, paving the way for smarter homes, cities, and industries. From smart thermostats and wearable fitness trackers to connected cars and industrial sensors, the proliferation of IoT devices is driving unprecedented levels of connectivity and convenience.</p>

      <h3 class="text-base text-start font-semibold my-4">Artificial Intelligence (AI) and Machine Learning:</h3>
      <p class="mb-6">
      Artificial intelligence and machine learning are poised to play a pivotal role in the future of mobile technology. From personalized recommendations and predictive analytics to intelligent virtual assistants, AI-powered algorithms are enhancing the capabilities of mobile devices and applications. As AI continues to evolve, we can expect mobile technology to become increasingly intuitive and adaptive, anticipating user needs and preferences in real time.</p>
      
      <div class="flex justify-center my-4">
        <img src="https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlfGVufDB8fDB8fHww" alt="5G Technology" class="w-full max-w-sm"/>
      </div>

       <h2 class="text-lg font-semibold my-4">Enhanced User Experiences </h2>

      <h3 class="text-base text-start font-semibold my-4">Augmented Reality (AR) and Virtual Reality (VR):</h3>

      <p class="mb-6">Augmented reality and virtual reality technologies are unlocking new frontiers in mobile user experiences. From immersive gaming experiences to interactive shopping applications, AR and VR are transforming how we engage with digital content. As these technologies become more sophisticated and accessible, we can expect to see them integrated into a wide range of mobile applications, from education and entertainment to retail and healthcare.</p>
      
      <h3 class="text-base text-start font-semibold my-4">Foldable and Flexible Displays:</h3>
      <p class="mb-6">The development of foldable and flexible display technologies is opening up new possibilities for mobile device design. By enabling devices to fold or bend without compromising screen quality, these innovative displays are redefining the form factor of smartphones and tablets. From compact devices that unfold into larger screens to wearable gadgets that wrap around the wrist, foldable and flexible displays are driving innovation in both hardware and software development.</p>
  <div className='flex justify-evenly flex-wrap'>
                        {isMobileView() && (
                            <>
                                <Adsense client="ca-pub-7832822790443742" slot="5" width={320} height={480} />
                                <Adsense client="ca-pub-7832822790443742" slot="6" width={336} height={280} />
                            </>
                        )}{isTabletView() && (
                            <>
                                <Adsense client="ca-pub-7832822790443742" slot="7" width={728} height={90} />
                                <Adsense client="ca-pub-7832822790443742" slot="8" width={768} height={90} />
                            </>
                        )}
                        {isLaptopView() && (
                            <>
                                <Adsense client="ca-pub-7832822790443742" slot="9" width={1024} height={90} />
                                <Adsense client="ca-pub-7832822790443742" slot="10" width={1200} height={90} />
                            </>
                        )}
                    </div>
      <h3 class="text-base text-start font-semibold my-4">Biometric Authentication:</h3>
      <p class="mb-6">
      Biometric authentication methods, such as facial recognition and fingerprint scanning, are becoming increasingly prevalent in mobile devices. By providing secure and convenient access to sensitive information, biometric authentication technologies are enhancing the security and user experience of mobile applications. As biometric sensors become more advanced and widespread, we can expect to see them integrated into a wider range of devices and applications.</p>

      <h2 class="text-lg font-semibold my-4">Challenges and Considerations</h2>
                        <Adsense client="ca-pub-7832822790443742" slot="5" width={320} height={480} />

      <h3 class="text-base text-start font-semibold my-4">Privacy and Security Concerns:</h3>
      <p class="mb-6">
      As mobile technology becomes more pervasive and interconnected, concerns about privacy and security are becoming increasingly prominent. From data breaches and identity theft to invasive surveillance and unauthorized access, protecting sensitive information and maintaining user privacy is a growing challenge for both developers and consumers. Addressing these concerns will require a multifaceted approach that combines robust security measures with transparent data policies and user education.</p>
      <h3 class="text-base text-start font-semibold my-4">Digital Inclusion and Accessibility:</h3>
      <p class="mb-6">Ensuring that mobile technology is accessible to all individuals, regardless of their abilities or socioeconomic status, is another critical consideration for the future of mobile technology. From designing inclusive user interfaces to providing affordable connectivity options, there is a need to bridge the digital divide and empower marginalized communities to fully participate in the digital economy. By prioritizing accessibility and inclusivity in mobile design and development, we can create a more equitable and sustainable future for all.</p>
      <h2 class="text-lg font-semibold my-4">Conclusion :</h2>
      <p class="mb-6">The future of mobile technology is brimming with promise and potential, driven by a convergence of emerging technologies and evolving user expectations. From the widespread adoption of 5G networks to the proliferation of IoT devices and AI-powered applications, the mobile landscape is undergoing a period of unprecedented innovation and transformation. However, as we embrace these advancements, it is essential to remain vigilant about the ethical, social, and environmental implications of mobile technology. By harnessing the power of technology responsibly and inclusively, we can build a future where mobile connectivity enriches lives and strengthens communities around the globe.</p>
    `,
        imageUrl: 'https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2'
    },
  

];


const ArticlePage = () => {
    const isTabletView = () => {
        return window.innerWidth >= 768 && window.innerWidth < 1024; // Assuming tablet width range
    };

    const isLaptopView = () => {
        return window.innerWidth >= 1024; // Assuming laptop width range
    };
    const isMobileView = () => {
        return window.innerWidth < 768; // Assuming mobile width range
    };

    const { id } = useParams();
    const article = articles.find(article => article.id === parseInt(id));

    if (!article) {
        return <p>Article not found</p>;
    }

    return (
        <>

            <div className="container mx-auto p-4 flex flex-col lg:flex-row justify-center items-center">
                <div className="w-full lg:w-3/4 p-4 shadow-xl">
                    <h1 className="text-2xl font-bold mb-4 text-center">{article.title}</h1>
                    <div className='flex justify-evenly flex-wrap'>
                        {isMobileView() && (
                            <>
                                <Adsense client="ca-pub-7832822790443742" slot="5" width={320} height={480} />
                                <Adsense client="ca-pub-7832822790443742" slot="6" width={336} height={280} />
                            </>
                        )}{isTabletView() && (
                            <>
                                <Adsense client="ca-pub-7832822790443742" slot="7" width={728} height={90} />
                                <Adsense client="ca-pub-7832822790443742" slot="8" width={768} height={90} />
                            </>
                        )}
                        {isLaptopView() && (
                            <>
                                <Adsense client="ca-pub-7832822790443742" slot="9" width={1024} height={90} />
                                <Adsense client="ca-pub-7832822790443742" slot="10" width={1200} height={90} />
                            </>
                        )}
                    </div>
                    <div className="prose lg:prose-xl text-center" dangerouslySetInnerHTML={{ __html: article.content }}></div>
                    <div className='flex justify-evenly flex-wrap'>
                        {isMobileView() && (
                            <>
                                <Adsense client="ca-pub-7832822790443742" slot="5" width={320} height={480} />
                                <Adsense client="ca-pub-7832822790443742" slot="6" width={336} height={280} />
                            </>
                        )}{isTabletView() && (
                            <>
                                <Adsense client="ca-pub-7832822790443742" slot="7" width={728} height={90} />
                                <Adsense client="ca-pub-7832822790443742" slot="8" width={768} height={90} />
                            </>
                        )}
                        {isLaptopView() && (
                            <>
                                <Adsense client="ca-pub-7832822790443742" slot="9" width={1024} height={90} />
                                <Adsense client="ca-pub-7832822790443742" slot="10" width={1200} height={90} />
                            </>
                        )}
                    </div>
                </div>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-1 justify-between'>
          <ArticleSidebar />
          <ArticleSidebar />
          <ArticleSidebar />
          <ArticleSidebar />
          <ArticleSidebar />
          <ArticleSidebar />
        </div>
            </div>
        </>

    );
};

export default ArticlePage;