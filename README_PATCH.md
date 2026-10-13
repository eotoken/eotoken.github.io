# EO Token Advisory Board photo patch

This patch adds standardized advisor portraits and integrates the Advisory Board into Chapter 19 in both Korean and English web editions.

Files changed:
- `assets/css/site.css` (scoped Advisory Board styles only)
- `assets/images/advisors/*.png` (15 standardized portraits)
- `ko/whitepaper/19-team-partners.html`
- `whitepaper/19-team-partners.html`

Notes:
- Existing global site design and navigation are unchanged.
- Advisor photos are cropped from the supplied advisor deck and normalized to the same rounded-square format.
- The source deck mapping indicates Kim Se-hyun is associated with Gaga Group / business management, while Lim Geon-muk is associated with GM's Consulting / former Motorola Korea CFO / AICPA. This patch follows that mapping.
