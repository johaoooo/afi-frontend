import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import HeroCarousel from '../../components/HeroCarousel';
import AdvantagesSection from '../../components/AdvantagesSection';
import AboutSection from '../../components/AboutSection';
import CategoriesSection from '../../components/CategoriesSection';
import ProductsSection from '../../components/ProductsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import TrainingsSection from '../../components/TrainingsSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import CTASection from '../../components/CTASection';
import ScrollReveal from '../../components/ScrollReveal';

const HomePage = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, productsRes, trainingsRes] = await Promise.all([
          axios.get('https://afi-backend-rneb.onrender.com/api/categories'),
          axios.get('https://afi-backend-rneb.onrender.com/api/produits'),
          axios.get('https://afi-backend-rneb.onrender.com/api/formations')
        ]);
        setCategories(categoriesRes.data.categories || []);
        setProducts(productsRes.data.produits || []);
        setTrainings(trainingsRes.data.formations || []);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <HeroCarousel />
      
      <ScrollReveal direction="up" delay={100}>
        <AdvantagesSection />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={200}>
        <AboutSection />
      </ScrollReveal>
      
      <ScrollReveal direction="left" delay={300}>
        <CategoriesSection categories={categories} />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={400}>
        <ProductsSection products={products} />
      </ScrollReveal>
      
      <ScrollReveal direction="right" delay={500}>
        <WhyChooseUsSection />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={600}>
        <TrainingsSection trainings={trainings} />
      </ScrollReveal>
      
      <ScrollReveal direction="left" delay={700}>
        <TestimonialsSection />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={800}>
        <CTASection />
      </ScrollReveal>
    </div>
  );
};

export default HomePage;
