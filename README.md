---
runme:
  id: 01HQTGHNJE8QWTMNCK66DNDHRZ
  version: v3
---

# Blog Uygulamasi

## Backend (Django)

graphql yapisin saglamak icin schema.py, types.py, queries.py ve mutations.py dosyalari olusturmamiz gerekiyor

- types.py: djangoda olusturdugumuz model turlerini graphql yapisina tanitir.
- queries.py: graphqle tanitilan modeller icin sorgu olusturma islemini yapar
- schema.py: graphql icin bir sema olusturur
- mutations.py: veri guncelleme, olusturma ve silme islemleri icin bir tur sorgu olusturur.

## Frontend (Vuejs)