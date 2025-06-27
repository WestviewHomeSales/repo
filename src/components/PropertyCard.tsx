import React from 'react';
import { formatPrice } from '../utils/formatters';
import { Property } from '../types/property';

// Define maps outside the component for better organization and to avoid re-creation on every render
const modelMap: Record<string, { name: string, url: string }> = {
  '2232 Portrait Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '2057 Viewfinder Street': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '5621 Gingham Drive': {
    name: 'Atlanta',
    url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf'
  },
  '3020 Chromatic Street': {
    name: 'Sienna',
    url: 'https://westviewhomesales.com/floorplans/Sienna.pdf'
  },
  '2686 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2660 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://www.lennar.com/new-homes/florida/orlando/kissimmee/westview/overlook-townhomes/amalfi/11178720540'
  },
  '5657 Portico Place': {
    name: 'Columbia',
    url: 'https://www.lennar.com/new-homes/florida/orlando/kissimmee/westview/aden-south-ii/columbia/26324720366/walkthrough'
  },
  '5618 Gingham Drive': {
    name: 'Concord',
    url: 'https://www.lennar.com/new-homes/florida/orlando/kissimmee/westview/aden-south-ii/concord/26324720293/walkthrough'
  },
  '3073 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '4660 Ackee Road': {
    name: 'Aspen',
    url: 'https://westviewhomesales.com/floorplans/Aspen.pdf'
  },
  '2279 Portrait Street': {
    name: 'Jasmine',
    url: 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6312846/2208-Portrait-Street-Kissimmee-FL'
  },
  '2081 Viewfinder Street': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '2065 Viewfinder Street': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '2235 Sepia Street': {
    name: 'Marigold',
    url: 'https://westviewhomesales.com/floorplans/Marigold.pdf'
  },
  '2267 Portrait Street': {
    name: 'Marigold',
    url: 'https://westviewhomesales.com/floorplans/Marigold.pdf'
  },
  '3356 Composition Street': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3344 Composition Street': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '3377 Composition Street': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '2259 Portrait Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '2255 Portrait Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3364 Composition Street': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '3397 Composition Street': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3338 Composition Street': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '3785 Sepia Street': {
    name: 'Marigold',
    url: 'https://westviewhomesales.com/floorplans/Marigold.pdf'
  },
  '3341 Composition Street': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '3360 Composition Street': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3804 Sepia Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
   '3793 Sepia Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
   '3349 Composition Street': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
   '2247 Portrait Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3389 Composition Street': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3363 Composition Street': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '2077 Viewfinder Street': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3789 Sepia Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '2414 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '2410 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '3820 Sepia Street': {
    name: 'Marigold',
    url: 'https://westviewhomesales.com/floorplans/Marigold.pdf'
  },
  '3786 Sepia Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3311 Composition Street': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
   '3367 Composition Street': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '2444 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2436 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2456 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '2452 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2435 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2447 Skyline Loop': {
    name: 'Sienna',
    url: 'https://westviewhomesales.com/floorplans/Sienna.pdf'
  },
  '2427 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '3764 Sepia Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3252 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '2486 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '3748 Sepia Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '2500 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '2508 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '3233 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3740 Sepia Street': {
    name: 'Marigold',
    url: 'https://westviewhomesales.com/floorplans/Marigold.pdf'
  },
  '3812 Sepia Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3248 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3381 Composition Street': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '2469 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2465 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '3631 Mayfair Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3744 Sepia Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '2495 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2473 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '3230 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3229 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3752 Sepia Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3234 Skyline Loop': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '2541 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '2470 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '3615 Mayfair Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '2460 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2534 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '3226 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3797 Sepia Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3760 Sepia Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3602 Mayfair Street': {
    name: 'Marigold',
    url: 'https://westviewhomesales.com/floorplans/Marigold.pdf'
  },
  '2537 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2490 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '3579 Mayfair Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '5655 Le Marin Way': {
    name: 'Redbud',
    url: 'https://westviewhomesales.com/floorplans/Redbud.pdf'
  },
  '3619 Mayfair Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '5625 Le Marin Way': {
    name: 'Dover',
    url: 'https://westviewhomesales.com/floorplans/Dover.pdf'
  },
  '3591 Mayfair Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '5689 Le Marin Way': {
    name: 'Cypress',
    url: 'https://westviewhomesales.com/floorplans/Cypress.pdf'
  },
  '3583 Mayfair Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '2489 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '5750 Gingham Drive': {
    name: 'Hartford',
    url: 'https://westviewhomesales.com/floorplans/Hartford.pdf'
  },
  '5786 Le Marin Way': {
    name: 'Columbia',
    url: 'https://westviewhomesales.com/floorplans/Columbia.pdf'
  },
  '3222 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '2580 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '5637 Le Marin Way': {
    name: 'Discovery',
    url: 'https://westviewhomesales.com/floorplans/Discovery.pdf'
  },
  '2499 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '3614 Mayfair Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '5834 Le Marin Way': {
    name: 'Annapolis',
    url: 'https://westviewhomesales.com/floorplans/Annapolis.pdf'
  },
  '4768 Guinep Lane': {
    name: 'Atlanta',
    url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf'
  },
  '3240 Skyline Loop': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '3180 Skyline Loop': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '3588 Mayfair Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3595 Mayfair Street': {
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '5822 Le Marin Way': {
    name: 'Annapolis',
    url: 'https://westviewhomesales.com/floorplans/Annapolis.pdf'
  },
  '5826 Le Marin Way': {
    name: 'Atlanta',
    url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf'
  },
  '5792 Gingham Drive': {
    name: 'Hartford',
    url: 'https://westviewhomesales.com/floorplans/Hartford.pdf'
  },
  '5793 Gingham Drive': {
    name: 'Sutton',
    url: 'https://westviewhomesales.com/floorplans/Sutton.pdf'
  },
  '2524 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '2558 Skyline Loop': {
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '5798 Le Marin Way': {
    name: 'Annapolis',
    url: 'https://westviewhomesales.com/floorplans/Annapolis.pdf'
  },
  '4751 Guinep Lane': {
    name: 'Atlanta',
    url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf'
  },
  '3184 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '5790 Le Marin Way': { // Added entry for 5790 Le Marin Way
    name: 'Annapolis',
    url: 'https://westviewhomesales.com/floorplans/Annapolis.pdf'
  },
  '4783 Cloister Street': { // Added entry for 4783 Cloister Street
    name: 'Hartford',
    url: 'https://westviewhomesales.com/floorplans/Hartford.pdf'
  },
  '3584 Mayfair Street': { // Added entry for 3584 Mayfair Street
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3545 Mayfair Street': { // Added entry for 3545 Mayfair Street
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3610 Mayfair Street': { // Added entry for 3610 Mayfair Street
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3541 Mayfair Street': { // Added entry for 3541 Mayfair Street
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3565 Mayfair Street': { // Added entry for 3565 Mayfair Street
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3599 Mayfair Street': { // Added entry for 3599 Mayfair Street
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3561 Mayfair Street': { // Added entry for 3561 Mayfair Street
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3557 Mayfair Street': { // Added entry for 3557 Mayfair Street
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3527 Mayfair Street': { // Added entry for 3527 Mayfair Street
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '3546 Mayfair Street': { // Added entry for 3546 Mayfair Street
    name: 'Jasmine',
    url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf'
  },
  '5802 Le Marin Way': { // Added entry for 5802 Le Marin Way
    name: 'Concord',
    url: 'https://westviewhomesales.com/floorplans/Concord.pdf'
  },
  '4738 Guinep Lane': { // Added entry for 4738 Guinep Lane
    name: 'Concord',
    url: 'https://westviewhomesales.com/floorplans/Concord.pdf'
  },
  '5612 Le Marin Way': { // Added entry for 5612 Le Marin Way
    name: 'Sutton',
    url: 'https://westviewhomesales.com/floorplans/Sutton.pdf'
  },
  '3214 Skyline Loop': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '3146 Skyline Loop': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '3133 Skyline Loop': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '3149 Skyline Loop': {
    name: 'Hazel',
    url: 'https://westviewhomesales.com/floorplans/Hazel.pdf'
  },
  '4780 Guinep Lane': {
    name: 'Atlanta',
    url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf'
  },
  '4744 Guinep Lane': {
    name: 'Atlanta',
    url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf'
  },
  '5778 Le Marin Way': {
    name: 'Atlanta',
    url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf'
  },
  '4756 Guinep Lane': {
    name: 'Atlanta',
    url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf'
  },
  '5858 Le Marin Way': {
    name: 'Atlanta',
    url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf'
  },
  '5624 Gingham Drive': {
    name: 'Atlanta',
    url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf'
  },
  '5680 Portico Place': {
    name: 'Atlanta',
    url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf'
  },
  '5686 Portico Place': {
    name: 'Atlanta',
    url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf'
  },
  '2550 Skyline Loop': {
    name: 'Sienna',
    url: 'https://westviewhomesales.com/floorplans/Sienna.pdf'
  },
  '2516 Skyline Loop': {
    name: 'Sienna',
    url: 'https://westviewhomesales.com/floorplans/Sienna.pdf'
  },
  '2549 Skyline Loop': {
    name: 'Sienna',
    url: 'https://westviewhomesales.com/floorplans/Sienna.pdf'
  },
  '2562 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2520 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2572 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2614 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2596 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2554 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2599 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2607 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '2615 Skyline Loop': {
    name: 'Minori',
    url: 'https://westviewhomesales.com/floorplans/Minori.pdf'
  },
  '4788 Cloister Street': {
    name: 'Hartford',
    url: 'https://westviewhomesales.com/floorplans/Hartford.pdf'
  },
  '5809 Le Marin Way': {
    name: 'Hartford',
    url: 'https://westviewhomesales.com/floorplans/Hartford.pdf'
  },
  '5845 Le Marin Way': {
    name: 'Dawn',
    url: 'https://westviewhomesales.com/floorplans/Dawn.pdf'
  },
  '4814 Yellow Elder Way': {
    name: 'Dawn',
    url: 'https://westviewhomesales.com/floorplans/Dawn.pdf'
  },
  '4786 Guinep Lane': {
    name: 'Dawn',
    url: 'https://westviewhomesales.com/floorplans/Dawn.pdf'
  },
  '4791 Yellow Elder Way': {
    name: 'Dawn',
    url: 'https://westviewhomesales.com/floorplans/Dawn.pdf'
  },
  '4682 Yellow Elder Way': {
    name: 'Dawn',
    url: 'https://westviewhomesales.com/floorplans/Dawn.pdf'
  },
  '5887 Le Marin Way': {
    name: 'Dawn',
    url: 'https://westviewhomesales.com/floorplans/Dawn.pdf'
  },
  '4762 Guinep Lane': {
    name: 'Columbia',
    url: 'https://westviewhomesales.com/floorplans/Columbia.pdf'
  },
  '5818 Le Marin Way': {
    name: 'Columbia',
    url: 'https://westviewhomesales.com/floorplans/Columbia.pdf'
  },
  '5842 Le Marin Way': {
    name: 'Columbia',
    url: 'https://westviewhomesales.com/floorplans/Columbia.pdf'
  },
  '4733 Guinep Lane': {
    name: 'Columbia',
    url: 'https://westviewhomesales.com/floorplans/Columbia.pdf'
  },
  '5870 Le Marin Way': {
    name: 'Belmont',
    url: 'https://westviewhomesales.com/floorplans/Belmont.pdf'
  },
  '4653 Yellow Elder Way': {
    name: 'Belmont',
    url: 'https://westviewhomesales.com/floorplans/Belmont.pdf'
  },
  '3195 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3188 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3196 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3174 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3183 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3200 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3171 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3175 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3179 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3158 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3124 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '3094 Skyline Loop': {
    name: 'Ivy',
    url: 'https://westviewhomesales.com/floorplans/Ivy.pdf'
  },
  '4776 Cloister Street': {
    name: 'Dover',
    url: 'https://westviewhomesales.com/floorplans/Dover.pdf'
  },
  '4789 Cloister Street': {
    name: 'Dover',
    url: 'https://westviewhomesales.com/floorplans/Dover.pdf'
  },
  '5618 Le Marin Way': { // New entry for 5618 Le Marin Way
    name: 'Dover',
    url: 'https://westviewhomesales.com/floorplans/Dover.pdf'
  },
  '5774 Gingham Drive': { // New entry for 5774 Gingham Drive
    name: 'Dover',
    url: 'https://westviewhomesales.com/floorplans/Dover.pdf'
  },
  '5769 Gingham Drive': { // New entry for 5769 Gingham Drive
    name: 'Dover',
    url: 'https://westviewhomesales.com/floorplans/Dover.pdf'
  },
  '5803 Le Marin Way': { // New entry for 5803 Le Marin Way
    name: 'Dover',
    url: 'https://westviewhomesales.com/floorplans/Dover.pdf'
  },
  '5775 Gingham Drive': { // New entry for 5775 Gingham Drive
    name: 'Discovery',
    url: 'https://westviewhomesales.com/floorplans/Discovery.pdf'
  },
  '5757 Gingham Drive': { // New entry for 5757 Gingham Drive
    name: 'Discovery',
    url: 'https://westviewhomesales.com/floorplans/Discovery.pdf'
  },
  '5841 Gingham Drive': { // New entry for 5841 Gingham Drive
    name: 'Discovery',
    url: 'https://westviewhomesales.com/floorplans/Discovery.pdf'
  },
  '5787 Gingham Drive': { // New entry for 5787 Gingham Drive
    name: 'Discovery',
    url: 'https://westviewhomesales.com/floorplans/Discovery.pdf'
  },
  '5857 Le Marin Way': { // New entry for 5857 Le Marin Way
    name: 'Celeste',
    url: 'https://westviewhomesales.com/floorplans/Celeste.pdf'
  },
  '4838 Yellow Elder Way': { // New entry for 4838 Yellow Elder Way
    name: 'Celeste',
    url: 'https://westviewhomesales.com/floorplans/Celeste.pdf'
  },
  '5875 Le Marin Way': { // New entry for 5875 Le Marin Way
    name: 'Celeste',
    url: 'https://westviewhomesales.com/floorplans/Celeste.pdf'
  },
  '4802 Yellow Elder Way': { // New entry for 4802 Yellow Elder Way
    name: 'Celeste',
    url: 'https://westviewhomesales.com/floorplans/Celeste.pdf'
  },
  '4670 Yellow Elder Way': { // New entry for 4670 Yellow Elder Way
    name: 'Celeste',
    url: 'https://westviewhomesales.com/floorplans/Celeste.pdf'
  },
  '4850 Yellow Elder Way': { // New entry for 4850 Yellow Elder Way
    name: 'Celeste',
    url: 'https://westviewhomesales.com/floorplans/Celeste.pdf'
  },
  '4784 Yellow Elder Way': { // New entry for 4784 Yellow Elder Way
    name: 'Celeste',
    url: 'https://westviewhomesales.com/floorplans/Celeste.pdf'
  },
  '5850 Le Marin Way': { // New entry for 5850 Le Marin Way
    name: 'Annapolis',
    url: 'https://westviewhomesales.com/floorplans/Annapolis.pdf'
  },
  '5806 Le Marin Way': { // New entry for 5806 Le Marin Way
    name: 'Annapolis',
    url: 'https://westviewhomesales.com/floorplans/Annapolis.pdf'
  },
  '5862 Le Marin Way': { // New entry for 5862 Le Marin Way
    name: 'Annapolis',
    url: 'https://westviewhomesales.com/floorplans/Annapolis.pdf'
  },
  '5839 Le Marin Way': { // New entry for 5839 Le Marin Way
    name: 'Bloom',
    url: 'https://westviewhomesales.com/floorplans/Bloom.pdf'
  },
  '4676 Yellow Elder Way': { // New entry for 4676 Yellow Elder Way
    name: 'Bloom',
    url: 'https://westviewhomesales.com/floorplans/Bloom.pdf'
  },
  '4826 Yellow Elder Way': { // New entry for 4826 Yellow Elder Way
    name: 'Bloom',
    url: 'https://westviewhomesales.com/floorplans/Bloom.pdf'
  },
  '4808 Yellow Elder Way': { // New entry for 4808 Yellow Elder Way
    name: 'Bloom',
    url: 'https://westviewhomesales.com/floorplans/Bloom.pdf'
  },
  '4796 Yellow Elder Way': { // New entry for 4796 Yellow Elder Way
    name: 'Bloom',
    url: 'https://westviewhomesales.com/floorplans/Bloom.pdf'
  },
  '5689 Nispero Way': { // New entry for 5689 Nispero Way
    name: 'Columbia',
    url: 'https://westviewhomesales.com/floorplans/Columbia.pdf'
  },
  '2602 Skyline Loop': { // New entry for 2602 Skyline Loop
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  '2610 Skyline Loop': { // Updated entry for 2610 Skyline Loop
    name: 'Amalfi',
    url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf'
  },
  // New entries for active properties from src/data/properties.ts
  '4560 Ochos Rios Place': { name: 'Venice', url: 'https://westviewhomesales.com/floorplans/Venice.pdf' },
  '4333 Curacao Place': { name: 'Ventura', url: 'https://westviewhomesales.com/floorplans/Ventura.pdf' },
  '4335 Curacao Place': { name: 'Ventura', url: 'https://westviewhomesales.com/floorplans/Ventura.pdf' },
  '4596 Ochos Rios Place': { name: 'Sanibel', url: 'https://westviewhomesales.com/floorplans/Sanibel.pdf' },
  '4541 Ochos Rios Place': { name: 'Siesta', url: 'https://westviewhomesales.com/floorplans/Siesta.pdf' },
  '5709 Gingham Drive': { name: 'Captiva', url: 'https://westviewhomesales.com/floorplans/Captiva.pdf' },
  '5687 Portico Place': { name: 'Columbia', url: 'https://westviewhomesales.com/floorplans/Columbia.pdf' },
  '5663 Portico Place': { name: 'Atlanta', url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf' },
  '4548 Ochos Rios Place': { name: 'Siesta', url: 'https://westviewhomesales.com/floorplans/Siesta.pdf' },
  '5626 Portico Place': { name: 'SantaRosa', url: 'https://westviewhomesales.com/floorplans/SantaRosa.pdf' },
  '5637 Gingham Drive': { name: 'Atlanta', url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf' },
  '4725 Yellow Elder Way': { name: 'Cypress', url: 'https://westviewhomesales.com/floorplans/Cypress.pdf' },
  '5733 Gingham Drive': { name: 'Anastasia', url: 'https://westviewhomesales.com/floorplans/Anastasia.pdf' },
  '4724 Cloister Street': { name: 'Azalea', url: 'https://westviewhomesales.com/floorplans/Azalea.pdf' },
  '4742 Yellow Elder Way': { name: 'Magnolia', url: 'https://westviewhomesales.com/floorplans/Magnolia.pdf' },
  '5658 Nevis Terrace': { name: 'Pallazio', url: 'https://westviewhomesales.com/floorplans/Pallazio.pdf' },
  '5652 Nevis Terrace': { name: 'Ambra', url: 'https://westviewhomesales.com/floorplans/Ambra.pdf' },
  '5653 Nevis Terrace': { name: 'Letizia', url: 'https://westviewhomesales.com/floorplans/Letizia.pdf' },
  '4204 Barbuda Lane': { name: 'Azzurro', url: 'https://westviewhomesales.com/floorplans/Azzurro.pdf' },
  '4210 Barbuda Lane': { name: 'Farnese', url: 'https://westviewhomesales.com/floorplans/Farnese.pdf' },
  '4215 Barbuda Lane': { name: 'Farnese', url: 'https://westviewhomesales.com/floorplans/Farnese.pdf' },
  '4209 Barbuda Lane': { name: 'Azzurro', url: 'https://westviewhomesales.com/floorplans/Azzurro.pdf' },
  '4197 Barbuda Lane': { name: 'Azzurro', url: 'https://westviewhomesales.com/floorplans/Azzurro.pdf' },
  '4740 Cloister Street': { name: 'Redbud', url: 'https://westviewhomesales.com/floorplans/Redbud.pdf' },
  '5642 Gingham Drive': { name: 'Atlanta', url: 'https://westviewhomesales.com/floorplans/Atlanta.pdf' },
  '5629 Gingham Drive': { name: 'Concord', url: 'https://westviewhomesales.com/floorplans/Concord.pdf' },
  '4572 Ochos Rios Place': { name: 'Venice', url: 'https://westviewhomesales.com/floorplans/Venice.pdf' },
  '4147 Coral Harbour Road': { name: 'Aruba', url: 'https://westviewhomesales.com/floorplans/Aruba.pdf' },
  '4578 Ochos Rios Place': { name: 'Sanibel', url: 'https://westviewhomesales.com/floorplans/Sanibel.pdf' },
  '4192 Barbuda Lane': { name: 'Lazio', url: 'https://westviewhomesales.com/floorplans/Lazio.pdf' },
  '4198 Barbuda Lane': { name: 'Farnese', url: 'https://westviewhomesales.com/floorplans/Farnese.pdf' },
  '5646 Nevis Terrace': { name: 'Pallazio', url: 'https://westviewhomesales.com/floorplans/Pallazio.pdf' },
  '5640 Nevis Terrace': { name: 'Letizia', url: 'https://westviewhomesales.com/floorplans/Letizia.pdf' },
  '5641 Nevis Terrace': { name: 'Pallazio', url: 'https://westviewhomesales.com/floorplans/Pallazio.pdf' },
  '4672 Ackee Road': { name: 'Aruba', url: 'https://westviewhomesales.com/floorplans/Aruba.pdf' },
  '2671 Skyline Loop': { name: 'Amalfi', url: 'https://westviewhomesales.com/floorplans/Amalfi.pdf' },
  '3056 Skyline Loop': { name: 'Ivy', url: 'https://westviewhomesales.com/floorplans/Ivy.pdf' },
  '2208 Portrait Street': { name: 'Jasmine', url: 'https://westviewhomesales.com/floorplans/Jasmine.pdf' },
  '3064 Skyline Loop': { name: 'Ivy', url: 'https://westviewhomesales.com/floorplans/Ivy.pdf' },
  '3060 Skyline Loop': { name: 'Ivy', url: 'https://westviewhomesales.com/floorplans/Ivy.pdf' },
  '4654 Ackee Road': { name: 'Miramar', url: 'https://westviewhomesales.com/floorplans/Miramar.pdf' },
  '2633 Skyline Loop': { name: 'Minori', url: 'https://westviewhomesales.com/floorplans/Minori.pdf' },
};

// Define urlMap for main listing details
const urlMap: Record<string, string | null> = {
  '4560 Ochos Rios Place': 'http://borchinirealty.idxbroker.com/idx/details/listing/d003/O6318335/4560-Ochos-Rios-Place-Kissimmee-FL',
  '4333 Curacao Place': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6318241/4333-Curacao-Place-Kissimmee-FL',
  '4335 Curacao Place': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6318325/4335-Curacao-Place-Kissimmee-FL',
  '4596 Ochos Rios Place': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6318230/4596-Ochos-Rios-Place-Kissimmee-FL',
  '4541 Ochos Rios Place': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6318194/4541-Ochos-Rios-Place-Kissimmee-FL',
  '5709 Gingham Drive': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6317821/5709-Gingham-Drive-Kissimmee-FL',
  '5687 Portico Place': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6317791/5687-Portico-Place-Kissimmee-FL',
  '5663 Portico Place': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6317788/5663-Portico-Place-Kissimmee-FL',
  '4548 Ochos Rios Place': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6317773/4548-Ochos-Rios-Place-Kissimmee-FL',
  '5626 Portico Place': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6317778/5626-Portico-Place-Kissimmee-FL',
  '5637 Gingham Drive': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6311835/5637-Gingham-Drive-Kissimmee-FL',
  '4725 Yellow Elder Way': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6311012/4725-Yellow-Elder-Way-Kissimmee-FL',
  '5733 Gingham Drive': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6311017/5733-Gingham-Drive-Kissimmee-FL',
  '4724 Cloister Street': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6310840/4724-Cloister-Street-Kissimmee-FL',
  '4742 Yellow Elder Way': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/4742-Yellow-Elder-Way-Kissimmee-FL/O6310852',
  '5658 Nevis Terrace': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6308514/5658-Nevis-Terrace-Kissimmee-FL',
  '5652 Nevis Terrace': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6308520/5652-Nevis-Terrace-Kissimmee-FL',
  '5653 Nevis Terrace': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/TB8385298/5653-Nevis-Terrace-Kissimmee-FL',
  '4204 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6308313/4204-Barbuda-Lane-Kissimmee-FL',
  '4210 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6308302/4210-Barbuda-Lane-Kissimmee-FL',
  '4215 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6308284/4215-Barbuda-Lane-Kissimmee-FL',
  '4209 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6308218/4209-Barbuda-Lane-Kissimmee-FL',
  '4197 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6286556/4197-Barbuda-Lane-Kissimmee-FL',
  '4740 Cloister Street': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6307541/4740-Cloister-Street-Kissimmee-FL',
  '5642 Gingham Drive': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/TB8375118/5642-Gingham-Drive-Kissimmee-FL',
  '3184 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6275321/3184-Skyline-Loop-Kissimmee-FL',
  '2081 Viewfinder Street': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6295684/2081-Viewfinder-St-Kissimmee-FL',
  '5629 Gingham Drive': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/TB8378709/5629-Gingham-Drive-Kissimmee-FL',
  '4572 Ochos Rios Place': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/TB8378730/4572-Ochos-Rios-Place-Kissimmee-FL',
  '4147 Coral Harbour Road': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6293960/4147-Coral-Harbour-Road-Kissimmee-FL',
  '2414 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/S5123120/2414-Skyline-Loop-Kissimmee-FL',
  '4578 Ochos Rios Place': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/TB8364379/4578-Ochos-Rios-Place-Kissimmee-FL',
  '4192 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6286451/4192-Barbuda-Lane-Kissimmee-FL',
  '4198 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6286442/4198-Barbuda-Lane-Kissimmee-FL',
  '5646 Nevis Terrace': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/TB8357109/5646-Nevis-Terrace-Kissimmee-FL',
  '5640 Nevis Terrace': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6286320/5640-Nevis-Terrace-Kissimmee-FL',
  '5641 Nevis Terrace': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6286178/5641-Nevis-Terrace-Kissimmee-FL',
  '4672 Ackee Road': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6217512/4672-Ackee-Road-Kissimmee-FL',
  '2671 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6316212/2671-Skyline-Loop-Kissimmee-FL',
  '3056 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6312991/3056-Skyline-Loop-Kissimmee-FL',
  '2208 Portrait Street': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6312846',
  '3064 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6312803',
  '3060 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/O6312812',
  '4654 Ackee Road': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/TB8386160',
  '2633 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/details/listing/d003/TB8378690',
  '3158 Skyline Loop': null, // No main listing URL for sold properties
  '3124 Skyline Loop': null, // No main listing URL for sold properties
  '3094 Skyline Loop': null, // No main listing URL for sold properties
  '4776 Cloister Street': null, // No main listing URL for sold properties
  '4789 Cloister Street': null, // No main listing URL for sold properties
  '5618 Le Marin Way': null, // No main listing URL for sold properties
  '5774 Gingham Drive': null, // No main listing URL for sold properties
  '5769 Gingham Drive': null, // No main listing URL for sold properties
  '5803 Le Marin Way': null, // No main listing URL for sold properties
  '5775 Gingham Drive': null, // No main listing URL for sold properties
  '5757 Gingham Drive': null, // No main listing URL for sold properties
  '5841 Gingham Drive': null, // No main listing URL for sold properties
  '5787 Gingham Drive': null, // No main listing URL for sold properties
  '5857 Le Marin Way': null, // No main listing URL for sold properties
  '4838 Yellow Elder Way': null, // No main listing URL for sold properties
  '5875 Le Marin Way': null, // No main listing URL for sold properties
  '4802 Yellow Elder Way': null, // No main listing URL for sold properties
  '4670 Yellow Elder Way': null, // No main listing URL for sold properties
  '4850 Yellow Elder Way': null, // No main listing URL for sold properties
  '4784 Yellow Elder Way': null, // No main listing URL for sold properties
  '5850 Le Marin Way': null, // No main listing URL for sold properties
  '5806 Le Marin Way': null, // No main listing URL for sold properties
  '5862 Le Marin Way': null, // No main listing URL for sold properties
  '5839 Le Marin Way': null, // No main listing URL for sold properties
  '4676 Yellow Elder Way': null, // No main listing URL for sold properties
  '4826 Yellow Elder Way': null, // No main listing URL for sold properties
  '4808 Yellow Elder Way': null, // No main listing URL for sold properties
  '4796 Yellow Elder Way': null, // No main listing URL for sold properties
  '5689 Nispero Way': null, // No main listing URL for sold properties
  '2602 Skyline Loop': null, // No main listing URL for sold properties
  '2610 Skyline Loop': null, // No main listing URL for sold properties
};


// Define galleryMap for photo gallery links
const galleryMap: Record<string, string | null> = {
  '2410 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8380939',
  '3820 Sepia Street': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8380939',
  '3786 Sepia Street': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8380939',
  '3311 Composition Street': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8380939',
  '3367 Composition Street': 'https://borchinirealty.com/idx/photogallery/d003/TB8380939',
  '2444 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8380939',
  '2436 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8380939',
  '2456 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8380939',
  '2452 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8380939',
  '4560 Ochos Rios Place': 'http://borchinirealty.idxbroker.com/idx/photogallery/d003/O6318335',
  '4333 Curacao Place': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6318241',
  '4335 Curacao Place': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6318325',
  '4596 Ochos Rios Place': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6318230',
  '4541 Ochos Rios Place': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6318194',
  '5709 Gingham Drive': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6317821',
  '5687 Portico Place': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6317791',
  '5663 Portico Place': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6317788',
  '4548 Ochos Rios Place': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6317773',
  '5626 Portico Place': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6317778',
  '5637 Gingham Drive': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6311835',
  '4725 Yellow Elder Way': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6311012',
  '5733 Gingham Drive': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6311017',
  '4724 Cloister Street': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/4724-Cloister-Street-Kissimmee-FL',
  '4742 Yellow Elder Way': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/4742-Yellow-Elder-Way-Kissimmee-FL/O6310852',
  '5658 Nevis Terrace': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6308514',
  '5652 Nevis Terrace': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6308520',
  '5653 Nevis Terrace': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8385298',
  '4204 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6308313',
  '4210 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6308302',
  '4215 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6308284',
  '4209 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6308218',
  '4197 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6286556/4197-Barbuda-Lane-Kissimmee-FL',
  '4740 Cloister Street': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6307541',
  '5642 Gingham Drive': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8375118',
  '3184 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6275321',
  '2081 Viewfinder Street': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6295684',
  '5629 Gingham Drive': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8378709',
  '4572 Ochos Rios Place': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8378730',
  '4147 Coral Harbour Road': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6293960',
  '2414 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/S5123120',
  '4578 Ochos Rios Place': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8364379',
  '4192 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6286451',
  '4198 Barbuda Lane': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6286442/4198-Barbuda-Lane-Kissimmee-FL',
  '5646 Nevis Terrace': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8357109',
  '5640 Nevis Terrace': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6286320',
  '5641 Nevis Terrace': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6286178',
  '4672 Ackee Road': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6217512',
  '2671 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6316212',
  '3056 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6312991',
  '2208 Portrait Street': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6312846',
  '3064 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6312803',
  '3060 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/O6312812',
  '4654 Ackee Road': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8386160',
  '2633 Skyline Loop': 'https://borchinirealty.idxbroker.com/idx/photogallery/d003/TB8378690',
  '3158 Skyline Loop': null, // No photo gallery URL for sold properties
  '3124 Skyline Loop': null, // No photo gallery URL for sold properties
  '3094 Skyline Loop': null, // No photo gallery URL for sold properties
  '4776 Cloister Street': null, // No photo gallery URL for sold properties
  '4789 Cloister Street': null, // No photo gallery URL for sold properties
  '5618 Le Marin Way': null, // No photo gallery URL for sold properties
  '5774 Gingham Drive': null, // No photo gallery URL for sold properties
  '5769 Gingham Drive': null, // No photo gallery URL for sold properties
  '5803 Le Marin Way': null, // No photo gallery URL for sold properties
  '5775 Gingham Drive': null, // No photo gallery URL for sold properties
  '5757 Gingham Drive': null, // No photo gallery URL for sold properties
  '5841 Gingham Drive': null, // No photo gallery URL for sold properties
  '5787 Gingham Drive': null, // No photo gallery URL for sold properties
  '5857 Le Marin Way': null, // No photo gallery URL for sold properties
  '4838 Yellow Elder Way': null, // No photo gallery URL for sold properties
  '5875 Le Marin Way': null, // No photo gallery URL for sold properties
  '4802 Yellow Elder Way': null, // No photo gallery URL for sold properties
  '4670 Yellow Elder Way': null, // No photo gallery URL for sold properties
  '4850 Yellow Elder Way': null, // No photo gallery URL for sold properties
  '4784 Yellow Elder Way': null, // No photo gallery URL for sold properties
  '5850 Le Marin Way': null, // No photo gallery URL for sold properties
  '5806 Le Marin Way': null, // No photo gallery URL for sold properties
  '5862 Le Marin Way': null, // No photo gallery URL for sold properties
  '5839 Le Marin Way': null, // No photo gallery URL for sold properties
  '4676 Yellow Elder Way': null, // No photo gallery URL for sold properties
  '4826 Yellow Elder Way': null, // No photo gallery URL for sold properties
  '4808 Yellow Elder Way': null, // No photo gallery URL for sold properties
  '4796 Yellow Elder Way': null, // No photo gallery URL for sold properties
  '5689 Nispero Way': null, // No photo gallery URL for sold properties
  '2602 Skyline Loop': null, // No photo gallery URL for sold properties
  '2610 Skyline Loop': null, // No photo gallery URL for sold properties
};


// Helper functions to get data from maps
const getModelInfo = (property: Property) => {
  return modelMap[property.address] || null;
};

const getPropertyUrl = (property: Property) => {
  // Use the newly defined urlMap
  return urlMap[property.address] || null;
};

const getPhotoGalleryUrl = (property: Property) => {
  return galleryMap[property.address] || null;
};


interface PropertyCardProps {
  property: Property;
  // Add a prop to indicate if the card is on the Sold page
  isSoldPage?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, isSoldPage }) => {
  const {
    status,
    imageUrl,
    price,
    address,
    city,
    state,
    zip,
    beds,
    baths,
    sqFt,
    listedBy,
    soldDate,
    listedDate
  } = property;

  const formatDate = (dateString: string) => {
    // Create date object and add noon time to avoid timezone issues
    const date = new Date(dateString + 'T12:00:00');
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  const badgeText = status === 'SOLD' && soldDate ? `SOLD ${formatDate(soldDate)}` : status === 'PENDING' ? 'PENDING' : null;
  const badgeClass = status === 'PENDING' ? 'bg-yellow-500' : status === 'SOLD' ? 'bg-green-500' : 'bg-blue-500';

  const modelInfo = getModelInfo(property);
  // Check if the property address exists in the urlMap to determine if it's pending
  const isPending = !isSoldPage && !urlMap[property.address];


  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden h-full flex flex-col">
      <div className="relative">
        {badgeText && (
          <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full uppercase text-white ${badgeClass}`}>
            {badgeText}
          </div>
        )}
        {/* Display Pending badge if no main listing URL is available AND it's NOT the Sold page */}
        {!isSoldPage && isPending && (
          <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full uppercase text-white bg-orange-500">
            Pending
          </div>
        )}
        {!status.includes('SOLD') && listedDate && (
          <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full uppercase text-white bg-green-600">
            {formatDate(listedDate)}
          </div>
        )}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`${address}, ${city}, ${state} ${zip}`}
            className="w-full h-48 object-cover"
          />
        )}
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{formatPrice(price)}</h3>

        <div className="text-gray-700 mb-3">
          <p className="break-words">{address}</p>
          <p className="break-words">{city}, {state} {zip}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center mb-4">
          <div>
            <p className="text-sm text-gray-500">Beds</p>
            <p className="font-semibold">{beds}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Baths</p>
            <p className="font-semibold">{baths}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Sq Ft</p>
            <p className="font-semibold">{sqFt.toLocaleString()}</p>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-4 mt-auto">
          <p>{status === 'SOLD' ? 'Builder' : 'Listed by'}: <strong>{listedBy}</strong></p>
          {/* On Current Listings, show Floor Plan text if modelInfo exists */}
          {modelInfo && !isSoldPage && (
            <p>
              Floor Plan: <a
                href={modelInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                <strong>{modelInfo.name}</strong>
              </a>
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          {isSoldPage ? (
            // On Sold Page, show Floor Plan if modelInfo exists
            modelInfo && (
              <a
                href={modelInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow h-8 rounded-md px-3 text-xs w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Floor Plan
              </a>
            )
          ) : (
            // On other pages, show More Details and Photo Gallery
            <>
              {getPropertyUrl(property) && (
                <a
                  href={getPropertyUrl(property)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow h-8 rounded-md px-3 text-xs w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  More Details
                </a>
              )}
              {getPhotoGalleryUrl(property) && (
                <a
                  href={getPhotoGalleryUrl(property)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-blue-600 shadow h-8 rounded-md px-3 text-xs w-full border border-blue-600 hover:bg-blue-50"
              >
                Photo Gallery
              </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
