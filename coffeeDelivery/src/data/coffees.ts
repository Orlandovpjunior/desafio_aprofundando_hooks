import expressoTradicional from '../assets/coffees/Type=Expresso.svg'
import expressoAmericano from '../assets/coffees/Type=Americano.svg'
import expressoCremoso from '../assets/coffees/Type=Expresso Cremoso.svg'
import expressoGelado from '../assets/coffees/Type=Café Gelado.svg'
import cafeComLeite from '../assets/coffees/Type=Café com Leite.svg'
import latte from '../assets/coffees/Type=Latte.svg'
import capuccino from '../assets/coffees/Type=Capuccino.svg'
import macchiato from '../assets/coffees/Type=Macchiato.svg'
import mochaccino from '../assets/coffees/Type=Mochaccino.svg'
import chocolateQuente from '../assets/coffees/Type=Chocolate Quente.svg'
import cubano from '../assets/coffees/Type=Cubano.svg'
import havaiano from '../assets/coffees/Type=Havaiano.svg'
import arabe from '../assets/coffees/Type=Árabe.svg'
import irlandes from '../assets/coffees/Type=Irlandês.svg'


export const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['TRADICIONAL'],
    price: '9,90',
    image: expressoTradicional,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['TRADICIONAL'],
    price: '9,90',
    image: expressoAmericano,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['TRADICIONAL'],
    price: '9,90',
    image: expressoCremoso,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['TRADICIONAL', 'GELADO'],
    price: '9,90',
    image: expressoGelado,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: '9,90',
    image: cafeComLeite,
  },
  {
    id: 6,
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: '9,90',
    image: latte,
  },
  {
    id: 7,
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: '9,90',
    image: capuccino,
  },
  {
    id: 8,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: '9,90',
    image: macchiato,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    price: '9,90',
    image: mochaccino,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['ESPECIAL', 'COM LEITE'],
    price: '9,90',
    image: chocolateQuente,
  },
  {
    id: 11,
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    price: '9,90',
    image: cubano,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['ESPECIAL'],
    price: '9,90',
    image: havaiano,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['ESPECIAL'],
    price: '9,90',
    image: arabe,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    price: '9,90',
    image: irlandes,
  },
]
