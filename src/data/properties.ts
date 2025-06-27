import { Property } from '../types/property';

export const properties: Property[] = [
  {
    id: 99, // Using a unique ID for the new property
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Venice.png',
    price: 339990,
    address: '4560 Ochos Rios Place',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2,
    sqFt: 1713,
    pricePerSqFt: Math.round(339990 / 1713), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-06-13'
  },
  {
    id: 100, // Unique ID for the new property
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Ventura.png',
    price: 269990,
    address: '4333 Curacao Place',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2,
    sqFt: 1562,
    pricePerSqFt: Math.round(269990 / 1562), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-06-13'
  },
  {
    id: 101, // Unique ID for the new property
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Ventura.png',
    price: 249990,
    address: '4335 Curacao Place',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2,
    sqFt: 1562,
    pricePerSqFt: Math.round(249990 / 1562), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-06-13'
  },
  {
    id: 102, // Unique ID for the new property
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Sanibel.png',
    price: 349990,
    address: '4596 Ochos Rios Place',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2,
    sqFt: 1872,
    pricePerSqFt: Math.round(349990 / 1872), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-06-12'
  },
  {
    id: 103, // Unique ID for the new property
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Siesta.png',
    price: 319990,
    address: '4541 Ochos Rios Place',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2,
    sqFt: 1553,
    pricePerSqFt: Math.round(319990 / 1553), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-06-12'
  },
  {
    id: 104, // New unique ID
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Captiva.png',
    price: 415000,
    address: '5709 Gingham Drive',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 3.5,
    sqFt: 1989,
    pricePerSqFt: Math.round(415000 / 1989), // Calculate price per sq ft
    yearBuilt: 2025,
    lotSize: 0.05,
    listedBy: 'Taylor Morrison',
    listedDate: '2025-06-12' // Use the provided date
  },
  {
    id: 105, // New unique ID for 5687 Portico Place
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Columbia.png',
    price: 379240,
    address: '5687 Portico Place',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 5,
    baths: 2.5,
    sqFt: 2370,
    pricePerSqFt: Math.round(379240 / 2370), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-06-12' // Use the provided date
  },
  {
    id: 106, // New unique ID for 5663 Portico Place
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Atlanta.png',
    price: 365790,
    address: '5663 Portico Place',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 4,
    baths: 2.5,
    sqFt: 1879,
    pricePerSqFt: Math.round(365790 / 1879), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-06-12' // Use the provided date
  },
  {
    id: 107, // New unique ID for 4548 Ochos Rios Place
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Siesta.png',
    price: 299990,
    address: '4548 Ochos Rios Place',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2,
    sqFt: 1553,
    pricePerSqFt: Math.round(299990 / 1553), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-06-12' // Use the provided date
  },
  {
    id: 108, // New unique ID for 5626 Portico Place
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/SantaRosa.png',
    price: 451549,
    address: '5626 Portico Place',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 4,
    baths: 3.5,
    sqFt: 2138,
    pricePerSqFt: Math.round(451549 / 2138), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-06-12' // Use the provided date
  },
  {
    id: 109, // New unique ID for 5637 Gingham Drive
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Atlanta.png',
    price: 349990,
    address: '5637 Gingham Drive',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 4,
    baths: 2.5,
    sqFt: 1879,
    pricePerSqFt: Math.round(349990 / 1879), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-05-23' // Use the provided date
  },
  {
    id: 110, // New unique ID for 4725 Yellow Elder Way
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Cypress.png',
    price: 350000,
    address: '4725 Yellow Elder Way',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 4,
    baths: 2,
    sqFt: 1848,
    pricePerSqFt: Math.round(350000 / 1848), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-21' // Use the provided date
  },
  {
    id: 111, // New unique ID for 5733 Gingham Drive
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Anastasia.png',
    price: 490000,
    address: '5733 Gingham Drive',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 4,
    baths: 3.5,
    sqFt: 2582,
    pricePerSqFt: Math.round(490000 / 2582), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-21' // Use the provided date
  },
  {
    id: 112, // New unique ID for 4724 Cloister Street
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Azalea.png',
    price: 390000,
    address: '4724 Cloister Street',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 5,
    baths: 3,
    sqFt: 2287,
    pricePerSqFt: Math.round(390000 / 2287), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-20' // Use the provided date
  },
  {
    id: 113, // New unique ID for 4742 Yellow Elder Way
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Magnolia.png',
    price: 380000,
    address: '4742 Yellow Elder Way',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 4,
    baths: 3,
    sqFt: 2106,
    pricePerSqFt: Math.round(380000 / 2106), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-20' // Use the provided date
  },
  {
    id: 115, // New unique ID for 5658 Nevis Terrace
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Pallazio.png',
    price: 736926,
    address: '5658 Nevis Terrace',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 3,
    sqFt: 3004,
    pricePerSqFt: Math.round(736926 / 3004), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-13' // Use the provided date
  },
  {
    id: 116, // New unique ID for 5652 Nevis Terrace
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Ambra.png',
    price: 616686,
    address: '5652 Nevis Terrace',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 3,
    sqFt: 2296,
    pricePerSqFt: Math.round(616686 / 2296), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-13' // Use the provided date
  },
  {
    id: 117, // New unique ID for 5653 Nevis Terrace
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Letizia.png',
    price: 600615,
    address: '5653 Nevis Terrace',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 4,
    baths: 3,
    sqFt: 2465,
    pricePerSqFt: Math.round(600615 / 2465), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-12' // Use the provided date
  },
  {
    id: 118, // New unique ID for 4204 Barbuda Lane
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Azzurro.png',
    price: 451554,
    address: '4204 Barbuda Lane',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 3,
    sqFt: 1886,
    pricePerSqFt: Math.round(451554 / 1886), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-12' // Use the provided date
  },
  {
    id: 119, // New unique ID for 4210 Barbuda Lane
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Farnese.png',
    price: 499745,
    address: '4210 Barbuda Lane',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 3.5,
    sqFt: 2100,
    pricePerSqFt: Math.round(499745 / 2100), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-12' // Use the provided date
  },
  {
    id: 120, // New unique ID for 4215 Barbuda Lane
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Farnese.png',
    price: 529320,
    address: '4215 Barbuda Lane',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 3.5,
    sqFt: 2100,
    pricePerSqFt: Math.round(529320 / 2100), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-12' // Use the provided date
  },
  {
    id: 121, // New unique ID for 4209 Barbuda Lane
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Azzurro.png',
    price: 490484,
    address: '4209 Barbuda Lane',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 2,
    sqFt: 1886,
    pricePerSqFt: Math.round(490484 / 1886), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-12' // Use the provided date
  },
  {
    id: 122, // New unique ID for 4197 Barbuda Lane
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Azzurro.png',
    price: 400000,
    address: '4197 Barbuda Lane',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 2,
    sqFt: 1886,
    pricePerSqFt: Math.round(400000 / 1886), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-03-04' // Use the provided date
  },
  {
    id: 123, // New unique ID for 4740 Cloister Street
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Redbud.png',
    price: 380000,
    address: '4740 Cloister Street',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 4,
    baths: 2.5,
    sqFt: 2143,
    pricePerSqFt: Math.round(380000 / 2143), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-09' // Use the provided date
  },
  {
    id: 124, // New unique ID for 5642 Gingham Drive
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Atlanta.png',
    price: 386490,
    address: '5642 Gingham Drive',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 4,
    baths: 2.5,
    sqFt: 1879,
    pricePerSqFt: Math.round(386490 / 1879), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-04-16' // Use the provided date
  },
  {
    id: 125, // New unique ID for 3184 Skyline Loop
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Ivy.png',
    price: 280000,
    address: '3184 Skyline Loop',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2.5,
    sqFt: 1219,
    pricePerSqFt: Math.round(280000 / 1219), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-01-27' // Use the provided date
  },
  {
    id: 126, // New unique ID for 2081 Viewfinder St
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Ivy.png',
    price: 263000,
    address: '2081 Viewfinder Street',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2.5,
    sqFt: 1219,
    pricePerSqFt: Math.round(263000 / 1219), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-04-18' // Use the provided date
  },
  {
    id: 127, // New unique ID for 5629 Gingham Drive
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Concord.png',
    price: 400790,
    address: '5629 Gingham Drive',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 6,
    baths: 3,
    sqFt: 2575,
    pricePerSqFt: Math.round(400790 / 2575), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-04-25' // Use the provided date
  },
  {
    id: 128, // New unique ID for 4572 Ochos Rios Place
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Venice.png',
    price: 319940,
    address: '4572 Ochos Rios Place',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2,
    sqFt: 1713,
    pricePerSqFt: Math.round(319940 / 1713), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-04-25' // Use the provided date
  },
  {
    id: 129, // New unique ID for 4147 Coral Harbour Road
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Aruba.png',
    price: 381000,
    address: '4147 Coral Harbour Road',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 2,
    sqFt: 1768,
    pricePerSqFt: Math.round(381000 / 1768), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-03-27' // Use the provided date
  },
  {
    id: 130, // New unique ID for 2414 Skyline Loop
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Amalfi.png',
    price: 289990,
    address: '2414 Skyline Loop',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 2.5,
    sqFt: 1689,
    pricePerSqFt: Math.round(289990 / 1689), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-03-21' // Use the provided date
  },
  {
    id: 131, // New unique ID for 4578 Ochos Rios Place
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Sanibel.png',
    price: 325990,
    address: '4578 Ochos Rios Place',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2,
    sqFt: 1872,
    pricePerSqFt: Math.round(325990 / 1872), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-03-20' // Use the provided date
  },
  {
    id: 132, // New unique ID for 4192 Barbuda Lane
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Lazio.png',
    price: 487000,
    address: '4192 Barbuda Lane',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 3,
    sqFt: 2275,
    pricePerSqFt: Math.round(487000 / 2275), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-03-03' // Use the provided date
  },
  {
    id: 133, // New unique ID for 4198 Barbuda Lane
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Farnese.png',
    price: 440000,
    address: '4198 Barbuda Lane',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2.5,
    sqFt: 2100,
    pricePerSqFt: Math.round(440000 / 2100), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-03-03' // Use the provided date
  },
  {
    id: 134, // New unique ID for 5646 Nevis Terrace
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Pallazio.png',
    price: 645000,
    address: '5646 Nevis Terrace',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 3,
    sqFt: 3004,
    pricePerSqFt: Math.round(645000 / 3004), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-03-03' // Use the provided date
  },
  {
    id: 135, // New unique ID for 5640 Nevis Terrace
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Letizia.png',
    price: 557000,
    address: '5640 Nevis Terrace',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 4,
    baths: 3,
    sqFt: 2465,
    pricePerSqFt: Math.round(557000 / 2465), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-03-03' // Use the provided date
  },
  {
    id: 136, // New unique ID for 5641 Nevis Terrace
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Pallazio.png',
    price: 677000,
    address: '5641 Nevis Terrace',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 3,
    sqFt: 3004,
    pricePerSqFt: Math.round(677000 / 3004), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-03-03' // Use the provided date
  },
  {
    id: 137, // New unique ID for 4672 Ackee Road
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Aruba.png',
    price: 390000,
    address: '4672 Ackee Road',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 2,
    sqFt: 1768,
    pricePerSqFt: Math.round(390000 / 1768), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2024-06-25' // Use the provided date
  },
  {
    id: 138, // New unique ID for 2671 Skyline Loop
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Amalfi.png',
    price: 293440,
    address: '2671 Skyline Loop',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 2,
    sqFt: 1689,
    pricePerSqFt: Math.round(293440 / 1689), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-06-06' // Updated date
  },
  {
    id: 139, // New unique ID for 3056 Skyline Loop
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Ivy.png',
    price: 237000,
    address: '3056 Skyline Loop',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2.5,
    sqFt: 1219,
    pricePerSqFt: Math.round(237000 / 1219), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-28' // Use the provided date
  },
  {
    id: 140, // New unique ID for 2208 Portrait Street
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Jasmine.png',
    price: 294000,
    address: '2208 Portrait Street',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 2.5,
    sqFt: 1373,
    pricePerSqFt: Math.round(294000 / 1373), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-27' // Use the provided date
  },
  {
    id: 141, // New unique ID for 3064 Skyline Loop
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Ivy.png',
    price: 237000,
    address: '3064 Skyline Loop',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2.5,
    sqFt: 1219,
    pricePerSqFt: Math.round(237000 / 1219), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-27' // Use the provided date
  },
  {
    id: 142, // New unique ID for 3060 Skyline Loop
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Ivy.png',
    price: 237000,
    address: '3060 Skyline Loop',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 2,
    baths: 2.5,
    sqFt: 1219,
    pricePerSqFt: Math.round(237000 / 1219), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Taylor Morrison',
    listedDate: '2025-05-27' // Use the provided date
  },
  {
    id: 143, // New unique ID for 4654 Ackee Road
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Miramar.png',
    price: 405690,
    address: '4654 Ackee Road',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 4,
    baths: 3,
    sqFt: 2571,
    pricePerSqFt: Math.round(405690 / 2571), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-05-14' // Use the provided date
  },
  {
    id: 144, // New unique ID for 2633 Skyline Loop
    status: 'ACTIVE',
    imageUrl: 'https://westviewhomesales.com/models/Minori.png',
    price: 282140,
    address: '2633 Skyline Loop',
    city: 'Kissimmee',
    state: 'FL',
    zip: '34758',
    beds: 3,
    baths: 2.5,
    sqFt: 1834,
    pricePerSqFt: Math.round(282140 / 1834), // Calculate price per sq ft
    yearBuilt: 2025, // Assuming new construction
    lotSize: 0.05, // Assuming standard lot size
    listedBy: 'Lennar',
    listedDate: '2025-05-01' // Use the provided date
  }
];
