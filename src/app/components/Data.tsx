import React from 'react'
import { DiAndroid, DiAngularSimple, DiApple, DiChrome, DiCss3, DiJsBadge } from 'react-icons/di'

type ProjectsProps = {
  title:string;
  budget: string;
  completion: string;
  icon: React.ReactNode;
}

export const projects:ProjectsProps[] = [ 
  {
    title: 'Chakra Soft UI Version',
    budget: '$14,000',
    completion: '60',
    icon: <DiAndroid />
  },
  {
    title: 'Add Progress Track',
    budget: '$3,000',
    completion: '10',
    icon: <DiAngularSimple />
  },
  {
    title: 'Fix Platform Errors',
    budget: 'Not set',
    completion: '100',
    icon: <DiApple />
  },
  {
    title: 'Launch our Mobile App',
    budget: '$32,000',
    completion: '100',
    icon: <DiChrome />
  },
  {
    title: 'Add the New Pricing Page',
    budget: '$400',
    completion: '25',
    icon: <DiCss3 />
  },
  {
    title: 'Redesign New Online Shop',
    budget: '$7,600',
    completion: '40',
    icon: <DiJsBadge />
  },
]


