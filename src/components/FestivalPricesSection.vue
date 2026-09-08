<script setup lang="ts">
import {
  Calendar as CalendarIcon,
  ChevronRight,
  CreditCard,
  ExternalLink,
  Info,
  Ticket,
} from "lucide-vue-next";

defineProps<{
  prices: Array<{
    type: string;
    lote1: string;
    lote2: string;
    lote3: string;
  }>;
  buyTicketsLabel: string;
  externalNotice: string;
  alternativePaymentTitle: string;
  bankHolderLabel: string;
  bankConceptLabel: string;
  preRegisterTitle: string;
}>();
</script>

<template>
  <section class="festival__prices">
    <div class="festival__prices-container">
      <div class="festival__section-header">
        <Ticket class="festival__section-icon" :size="48" />
        <h2 class="festival__section-title">
          {{ $t("festival.passes_title") }}
        </h2>
      </div>

      <div class="festival__prices-table-wrapper">
        <table class="festival__prices-table">
          <thead>
            <tr>
              <th class="festival__main-title">
                {{ $t("festival.table_pass") }}
              </th>
              <th class="festival__col-titles">
                {{ $t("festival.table_lot1") }}
              </th>
              <th class="festival__col-titles">
                {{ $t("festival.table_lot2") }}
              </th>
              <th class="festival__col-titles">
                {{ $t("festival.table_lot3") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(price, idx) in prices" :key="idx">
              <td class="festival__table-pass-name">{{ price.type }}</td>
              <td
                class="festival__table-price festival__table-price--highlight"
              >
                {{ price.lote1 }}
              </td>
              <td class="festival__table-price">{{ price.lote2 }}</td>
              <td class="festival__table-price">{{ price.lote3 }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="festival__notice">
        <Info :size="20" class="festival__notice-icon" />
        <p>{{ externalNotice }}</p>
      </div>

      <div class="festival__cta-actions">
        <div class="festival__cta-primary">
          <a
            href="https://entradas.forrosevilla.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="festival__btn festival__btn--red festival__btn--large"
          >
            {{ buyTicketsLabel }}
            <ExternalLink :size="24" />
          </a>
        </div>

        <div class="festival__info-cards-grid">
          <div class="festival__info-card">
            <h3 class="festival__info-card-title">
              <CreditCard
                class="festival__info-card-icon festival__info-card-icon--gold"
                :size="24"
              />
              {{ alternativePaymentTitle }}
            </h3>
            <div class="festival__info-card-content">
              <p>
                <strong>{{ bankHolderLabel }}:</strong> Elton Rodrigues Da Silva
                Moreira
              </p>
              <p><strong>IBAN:</strong> ES27 1583 0001 1590 9968 6526</p>
              <p><strong>BIC:</strong> REVOESM2</p>
              <p><strong>Banco:</strong> Revolut Bank UAB (Madrid)</p>
              <p>
                <strong>{{ bankConceptLabel }}:</strong> Festival Forró Sevilla
                2026
              </p>
            </div>
          </div>

          <div class="festival__info-card">
            <h3 class="festival__info-card-title">
              <CalendarIcon
                class="festival__info-card-icon festival__info-card-icon--orange"
                :size="24"
              />
              {{ preRegisterTitle }}
            </h3>
            <div class="festival__info-card-links">
              <a
                href="https://forms.gle/Tn7jqu8rkBHCZJs7A"
                target="_blank"
                rel="noopener noreferrer"
                class="festival__info-link"
              >
                Español / English <ChevronRight :size="20" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.festival__prices {
  background-color: var(--bg-base);
  padding: 96px 24px;
}

.festival__prices-container {
  margin: 0 auto;
  max-width: 1280px;
}

.festival__section-header {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 64px;
  text-align: center;
}

.festival__section-title {
  color: var(--gray-900);
  font-family: var(--font-serif);
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
  margin-bottom: 24px;
}

.festival__section-icon {
  color: var(--forro-red);
}

.festival__prices-table-wrapper {
  background: var(--bg-surface);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin: 0 auto 48px;
  max-width: 1000px;
  overflow: hidden;
}

.festival__main-title {
  text-align: left;
}

.festival__col-titles {
  text-align: center;
}

.festival__prices-table {
  border-collapse: collapse;
  width: 100%;
}

.festival__prices-table thead {
  background: linear-gradient(135deg, var(--forro-orange), var(--forro-red));
  color: white;
}

.festival__prices-table th {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 20px 16px;
  text-transform: uppercase;
}

.festival__prices-table tbody tr {
  border-bottom: 1px solid var(--gray-200);
  transition: background-color 0.3s ease;
}

.festival__prices-table tbody tr:hover {
  background-color: var(--gray-100);
}

.festival__prices-table tbody tr:last-child {
  border-bottom: none;
}

.festival__prices-table td {
  font-size: 1rem;
  padding: 20px 16px;
}

.festival__table-pass-name {
  color: var(--forro-earth);
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 700;
}

.festival__table-price {
  color: var(--text-secondary);
  text-align: center;
}

.festival__table-price--highlight {
  color: var(--forro-orange);
  font-size: 1.1rem;
  font-weight: 700;
}

.festival__notice {
  align-items: center;
  background: var(--bg-surface);
  border-left: 4px solid var(--forro-orange);
  border-radius: 8px;
  color: var(--text-secondary);
  display: flex;
  font-size: 0.95rem;
  gap: 12px;
  justify-content: center;
  margin: 0 auto 48px;
  max-width: 1000px;
  padding: 16px 24px;
}

.festival__notice-icon {
  color: var(--forro-orange);
  flex-shrink: 0;
}

.festival__notice p {
  margin: 0;
}

.festival__cta-actions {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.festival__cta-primary {
  text-align: center;
}

.festival__btn {
  align-items: center;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  gap: 12px;
  padding: 14px 32px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.festival__btn--red {
  background-color: var(--forro-red);
  box-shadow: 0 10px 25px rgba(217, 68, 54, 0.3);
  color: white;
}

.festival__btn--red:hover {
  background-color: var(--forro-earth);
  box-shadow: 0 15px 35px rgba(140, 91, 63, 0.4);
  transform: translateY(-2px);
}

.festival__btn--large {
  font-size: 1.125rem;
  padding: 18px 48px;
}

.festival__info-cards-grid {
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .festival__info-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.festival__info-card {
  background: var(--bg-surface);
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 40px 32px;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.festival__info-card:hover {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.festival__info-card-title {
  align-items: center;
  color: var(--gray-900);
  display: flex;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  gap: 12px;
  justify-content: center;
  margin-bottom: 24px;
  text-align: center;
}

.festival__info-card-icon {
  flex-shrink: 0;
}

.festival__info-card-icon--gold {
  color: var(--forro-gold);
}

.festival__info-card-icon--orange {
  color: var(--forro-orange);
}

.festival__info-card-content {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.8;
  text-align: center;
}

.festival__info-card-content p {
  margin-bottom: 8px;
}

.festival__info-card-content p:last-child {
  margin-bottom: 0;
}

.festival__info-card-content strong {
  color: var(--gray-900);
  font-weight: 700;
}

.festival__info-card-links {
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
}

.festival__info-link {
  align-items: center;
  background: var(--gray-100);
  border: 2px solid transparent;
  border-radius: 12px;
  color: var(--forro-orange);
  display: flex;
  font-weight: 700;
  gap: 12px;
  justify-content: center;
  padding: 14px 20px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.festival__info-link:hover {
  background: var(--gray-200);
  border-color: var(--forro-orange);
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .festival__prices {
    padding: 64px 16px;
  }

  .festival__section-header {
    margin-bottom: 48px;
  }

  .festival__prices-table-wrapper {
    overflow-x: auto;
  }

  .festival__prices-table th,
  .festival__prices-table td {
    font-size: 0.85rem;
    padding: 12px 8px;
  }

  .festival__info-card {
    padding: 24px 20px;
  }

  .festival__info-card-title {
    font-size: 1.1rem;
  }
}
</style>
