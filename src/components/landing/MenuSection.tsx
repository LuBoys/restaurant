/* eslint-disable @next/next/no-img-element */
import type { BurgerProduct } from "@/data/burgerProducts";

type MenuSectionProps = {
  products: BurgerProduct[];
};

export function MenuSection({ products }: MenuSectionProps) {
  return (
    <section className="menu" id="menu">
      <div className="menu__header">
        <div className="menu__title-group">
          <span className="menu__label reveal">Nos burgers signatures</span>
          <h2 className="menu__title reveal">Selection maison</h2>
        </div>

        <a href="#reservation" className="menu__view-all reveal">
          Commander la carte
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="menu__scroll">
        {products.map((product) => (
          <article className="menu__item reveal-scale" key={product.id}>
            <div className="menu__item-image">
              <img src={product.image} alt={product.alt} loading="lazy" />
              <div className="menu__item-overlay" />
              <span className="menu__item-price">{product.price}</span>
            </div>

            <div className="menu__item-content">
              <span className="menu__item-japanese">{product.badge}</span>
              <h3 className="menu__item-name">{product.name}</h3>
              <p className="menu__item-desc">{product.description}</p>

              <div className="menu__item-meta">
                <div className="menu__item-tags">
                  {product.tags.map((tag) => (
                    <span className="menu__item-tag" key={`${product.id}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="menu__item-calories">{product.calories} kcal</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
