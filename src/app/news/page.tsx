import Image from 'next/image';
import styles from './NewsPage.module.css';
import Link from 'next/link';

const NewsPage = () => {
  const newsArticles = [
    {
      title: 'New Menu Launch!',
      date: 'February 9, 2025',
      description: 'We are excited to introduce a brand new menu filled with fresh and tasty items!',
      imageUrl: '/images/cum.png',
      extraTitle: 'The Freshest Ingredients',
      extraText: 'Our new menu is all about fresh ingredients, locally sourced, and handpicked for the best flavors!'
    },
    {
      title: 'Seasonal Discounts Available',
      date: 'February 5, 2025',
      description: 'Enjoy amazing discounts on all seasonal food items throughout the month of February.',
      imageUrl: '/images/la3.png',
      extraTitle: 'Discounts You Can’t Miss!',
      extraText: 'Grab these offers while they last! Delicious meals at an unbeatable price this season.'
    },
    {
      title: 'Food Tuck Featured in Food Mag!',
      date: 'January 28, 2025',
      description: 'Our food truck was recently featured in the latest edition of Food Magazine. Check it out!',
      imageUrl: '/images/sh8.png',
      extraTitle: 'Get a Sneak Peek!',
      extraText: 'Read more about how our food truck made it to the latest Food Magazine issue and what makes us stand out.'
    },
  ];

  return (
    <>
       <section
            className="bg-cover bg-center h-64 flex items-center justify-center"
            style={{ backgroundImage: "url('/images/bg.png')" }}
          >
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold">News Page</h2>
              <p className="pt-2">
                <Link href="/" className="text-yellow-400">
                  Home
                </Link>{" "}
                › News
              </p>
            </div>
          </section>
    <div className={styles.newsPage}>
      <h1 className={styles.pageTitle}><span className='text-orange-600'>La</span>test News</h1>
      <div className={styles.articlesContainer}>
        {newsArticles.map((article, index) => (
          <div key={index} className={styles.articleCard}>
            <div className={styles.imageContainer}>
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={600}
                height={400}
                className={styles.articleImage}
              />
            </div>
            <div className={styles.articleContent}>
              
              <h2 className={styles.articleTitle}>{article.title}</h2>
              <p className={styles.articleDate}>{article.date}</p>
              <p className={styles.articleDescription}>{article.description}</p>
            </div>

            {/* Added Heading and Text under each article */}
            <div className={styles.extraInfo}>
              <h3 className={styles.extraHeading}>{article.extraTitle}</h3>
              <p className={styles.extraText}>{article.extraText}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      </>
  );
};

export default NewsPage;
