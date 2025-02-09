import Image from 'next/image';
import styles from './PatronsPage.module.css';
import Link from 'next/link';

const PatronsPage = () => {
  const patrons = [
    {
      name: 'John Doe',
      role: 'Gold Patron',
      imageUrl: '/images/cum2.png',
      contribution: '$1000',
    },
    {
      name: 'Emily Davis',
      role: 'Bronze Patron',
      imageUrl: '/images/cum1.png',
      contribution: '$250',
    },
    {
      name: 'Jane Smith',
      role: 'Silver Patron',
      imageUrl: '/images/cum3.png',
      contribution: '$500',
    },
    {
      name: 'Janiffer Doe',  // New Patron
      role: 'Platinum Patron', 
      imageUrl: '/images/cum4.png', 
      contribution: '$2000',
    },
  
  
    // Add more patrons as needed
  ];

  return (
    <>
       <section
            className="bg-cover bg-center h-64 flex items-center justify-center"
            style={{ backgroundImage: "url('/images/bg.png')" }}
          >
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold">Patrons Page</h2>
              <p className="pt-2">
                <Link href="/" className="text-yellow-400">
                  Home
                </Link>{" "}
                › Patrons Page
              </p>
            </div>
          </section>
    
    <div className={styles.patronsPage}>
      <h1 className={styles.pageTitle}><span className='text-orange-600'>Our</span> Amazing Patrons</h1>
      <div className={styles.patronsGrid}>
        {patrons.map((patron, index) => (
          <div key={index} className={styles.patronCard}>
            <div className={styles.imageContainer}>
              <Image
                src={patron.imageUrl}
                alt={patron.name}
                width={200}
                height={200}
                className={styles.patronImage}
              />
            </div>
            <div className={styles.patronDetails}>
              <h2 className={styles.patronName}>{patron.name}</h2>
              <p className={styles.patronRole}>{patron.role}</p>
              <p className={styles.patronContribution}>Contribution: {patron.contribution}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      </>
  );
};

export default PatronsPage;
