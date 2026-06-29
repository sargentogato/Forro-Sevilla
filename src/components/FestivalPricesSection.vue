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
                href="https://forms.gle/X4xaPv1dw6F6ALCt9"
                target="_blank"
                rel="noopener noreferrer"
                class="festival__info-link"
              >
                Español <ChevronRight :size="20" />
              </a>
              <a
                href="https://forms.gle/Tn7jqu8rkBHCZJs7A"
                target="_blank"
                rel="noopener noreferrer"
                class="festival__info-link"
              >
                English <ChevronRight :size="20" />
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
  padding: 96px 24px;
  background-color: #fdf5f0;
}

.festival__prices-container {
  max-width: 1280px;
  margin: 0 auto;
}

.festival__section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 64px;
  text-align: center;
}

.festival__section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 24px;
  color: var(--dark);
  font-family: var(--font-serif);
  line-height: 1.2;
}

.festival__section-icon {
  color: var(--forro-red);
}

.festival__prices-table-wrapper {
  max-width: 1000px;
  margin: 0 auto 48px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.festival__main-title {
  text-align: left;
}

.festival__col-titles {
  text-align: center;
}

.festival__prices-table {
  width: 100%;
  border-collapse: collapse;
}

.festival__prices-table thead {
  background: linear-gradient(135deg, var(--forro-orange), var(--forro-red));
  color: white;
}

.festival__prices-table th {
  padding: 20px 16px;
  font-weight: 700;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.festival__prices-table tbody tr {
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.3s ease;
}

.festival__prices-table tbody tr:hover {
  background-color: #fff7ed;
}

.festival__prices-table tbody tr:last-child {
  border-bottom: none;
}

.festival__prices-table td {
  padding: 20px 16px;
  font-size: 1rem;
}

.festival__table-pass-name {
  font-weight: 700;
  font-family: var(--font-serif);
  font-size: 1.1rem;
  color: var(--forro-earth);
}

.festival__table-price {
  text-align: center;
  color: var(--text-secondary);
}

.festival__table-price--highlight {
  color: var(--forro-orange);
  font-weight: 700;
  font-size: 1.1rem;
}

.festival__notice {
  max-width: 1000px;
  margin: 0 auto 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 24px;
  background: white;
  border-left: 4px solid var(--forro-orange);
  border-radius: 8px;
  font-size: 0.95rem;
  color: var(--text-secondary);
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
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 32px;
  border-radius: 9999px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  text-decoration: none;
  font-family: var(--font-sans);
  transition: all 0.3s ease;
  font-size: 1rem;
}

.festival__btn--red {
  background-color: var(--forro-red);
  color: white;
  box-shadow: 0 10px 25px rgba(217, 68, 54, 0.3);
}

.festival__btn--red:hover {
  background-color: var(--forro-earth);
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(140, 91, 63, 0.4);
}

.festival__btn--large {
  padding: 18px 48px;
  font-size: 1.125rem;
}

.festival__info-cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 768px) {
  .festival__info-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.festival__info-card {
  background: white;
  padding: 40px 32px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.festival__info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.festival__info-card-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: var(--font-serif);
  margin-bottom: 24px;
  text-align: center;
  color: var(--dark);
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
  font-size: 0.95rem;
  text-align: center;
  color: var(--text-secondary);
  line-height: 1.8;
}

.festival__info-card-content p {
  margin-bottom: 8px;
}

.festival__info-card-content p:last-child {
  margin-bottom: 0;
}

.festival__info-card-content strong {
  color: var(--dark);
  font-weight: 700;
}

.festival__info-card-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.festival__info-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 20px;
  background: #f3f4f6;
  border-radius: 12px;
  color: var(--forro-orange);
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.festival__info-link:hover {
  background: #fff7ed;
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
    padding: 12px 8px;
    font-size: 0.85rem;
  }

  .festival__info-card {
    padding: 24px 20px;
  }

  .festival__info-card-title {
    font-size: 1.1rem;
  }
}
</style>
