import Image from 'next/image';
import styles from './Team.module.css';
import Link from 'next/link';

const Team = () => {
  const teamMembers = [
    {
      name: 'Chef John Doe',
      role: 'Head Chef',
      imageUrl: '/images/head.png',
      description: 'Chef John brings over 15 years of culinary expertise. His creative vision has transformed Food Tuck into a beacon of culinary excellence. With a deep passion for fresh ingredients, he believes in crafting dishes that not only taste amazing but tell a story of innovation and tradition combined.',
      socialLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/chefjohn' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/chefjohn' }
      ]
    },
    {
      name: 'Emily Davis',
      role: 'Restaurant Manager',
      imageUrl: '/images/mana.png',
      description: 'Emily ensures that everything runs smoothly at Food Tuck. From overseeing the team to ensuring guests have a top-tier experience, her attention to detail and customer-first mindset make her the backbone of the restaurant’s success.',
      socialLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/emilydavis' }
      ]
    },
    {
      name: 'Sam Smith',
      role: 'Food Stylist',
      imageUrl: '/images/st1.png',
      description: 'Sam’s role is all about presenting food in its best light. As a food stylist, they work closely with the kitchen and photography team to create visually stunning dishes that make customers’ mouths water even before they take a bite.',
      socialLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/samsmith' }
      ]
    },
    {
      name: 'Lily Lee',
      role: 'Sous Chef',
      imageUrl: '/images/sos.png',
      description: 'As the sous chef, Lily works directly under Chef John to bring his dishes to life. From prep work to cooking, she’s there every step of the way, ensuring every plate meets the high standards Food Tuck is known for.',
      socialLinks: [
        { platform: 'Instagram', url: 'https://instagram.com/lilylee' }
      ]
    },
  ];

  return (
    <>
       <section
            className="bg-cover bg-center h-64 flex items-center justify-center"
            style={{ backgroundImage: "url('/images/bg.png')" }}
          >
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold">Our Team</h2>
              <p className="pt-2">
                <Link href="/" className="text-yellow-400">
                  Home
                </Link>{" "}
                › Our Team
              </p>
            </div>
          </section>
    <div className={styles.teamPage}>
      <h1 className={styles.pageTitle}><span className='text-orange-500'>Meet</span> Our Amazing Team</h1>
      {teamMembers.map((member, index) => (
        <div key={index} className={styles.teamMember}>
          <div className={styles.imageContainer}>
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={300}
              height={300}
              className={styles.teamImage}
            />
          </div>
          <div className={styles.detailsContainer}>
            <h2 className={styles.teamName}>{member.name}</h2>
            <p className={styles.teamRole}>{member.role}</p>
            <p className={styles.teamDescription}>{member.description}</p>
            <div className={styles.socialLinks}>
              {member.socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
      </div>
      </>
  );
};

export default Team;
