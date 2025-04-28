import { CoffeeList, HomeContainer, IntroContainer, BenefitsContainer, CoffeeCard } from './styles'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import { coffees } from '../../data/coffees'
import introImage from '../../assets/Imagem.svg'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Home() {

    const { addToCart } = useContext(CartContext)
    const [quantities, setQuantities] = useState<{ [id: number]: number }>({})

    function handleIncrease(id: number) {
        setQuantities((state) => ({
            ...state,
            [id]: (state[id] || 1) + 1,
        }))
    }

    function handleDecrease(id: number) {
        setQuantities((state) => ({
            ...state,
            [id]: state[id] > 1 ? state[id] - 1 : 1,
        }))
    }

    return (
        <HomeContainer>
            <IntroContainer>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <BenefitsContainer>
                        <div>
                            <span className="yellow-dark">
                                <ShoppingCart weight="fill" />
                            </span>
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <span className="gray">
                                <Package weight="fill" />
                            </span>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <span className="yellow">
                                <Timer weight="fill" />
                            </span>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>
                            <span className="purple">
                                <Coffee weight="fill" />
                            </span>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </BenefitsContainer>
                </div>
                <img src={introImage} alt="Copo de café" />
            </IntroContainer>

            <h2>Nossos cafés</h2>

            <CoffeeList>
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id}>
                        <img src={coffee.image} alt={coffee.name} />
                        <div className="tags">
                            {coffee.tags.map(tag => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                        <h3>{coffee.name}</h3>
                        <p>{coffee.description}</p>
                        <footer>
                            <div>
                                <strong>R$</strong> {coffee.price}
                            </div>
                            <div className="actions">
                                <div className="quantity">
                                    <button onClick={() => handleDecrease(coffee.id)}>-</button>
                                    <span>{quantities[coffee.id] || 1}</span>
                                    <button onClick={() => handleIncrease(coffee.id)}>+</button>
                                </div>
                                <button
                                    className="cart"
                                    onClick={() => addToCart({
                                        id: coffee.id,
                                        name: coffee.name,
                                        price: coffee.price,
                                        image: coffee.image,
                                        quantity: quantities[coffee.id] || 1,
                                    })}
                                >
                                    <ShoppingCart size={22} weight="fill" />
                                </button>

                            </div>
                        </footer>

                    </CoffeeCard>
                ))}
            </CoffeeList>
        </HomeContainer>
    )
}
