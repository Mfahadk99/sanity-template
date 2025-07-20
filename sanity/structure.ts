
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Pages section
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Generic Pages')
                .child(S.documentTypeList('genericPage').title('Generic Pages')),
              S.listItem()
                .title('FAQ Pages')
                .child(S.documentTypeList('faqPage').title('FAQ Pages')),
              S.listItem()
                .title('Map Pages')
                .child(S.documentTypeList('mapPage').title('Map Pages')),
              S.listItem()
                .title('Prices Pages')
                .child(S.documentTypeList('pricesPage').title('Prices Pages')),
              S.listItem()
                .title('Tickets Pages')
                .child(S.documentTypeList('ticketsPage').title('Tickets Pages')),
              S.listItem()
                .title('Information Pages')
                .child(S.documentTypeList('informationsPage').title('Information Pages')),
            ])
        ),

      // Events section with filtering
      S.listItem()
        .title('Events')
        .child(
          S.list()
            .title('Events')
            .items([
              S.listItem()
                .title('All Events')
                .child(S.documentTypeList('eventPage').title('All Events')),
              S.listItem()
                .title('Upcoming Events')
                .child(
                  S.documentTypeList('eventPage')
                    .title('Upcoming Events')
                    .filter('_type == "eventPage" && startDate >= now()')
                    .defaultOrdering([{ field: 'startDate', direction: 'asc' }])
                ),
              S.listItem()
                .title('Past Events')
                .child(
                  S.documentTypeList('eventPage')
                    .title('Past Events')
                    .filter('_type == "eventPage" && startDate < now()')
                    .defaultOrdering([{ field: 'startDate', direction: 'desc' }])
                ),
              S.listItem()
                .title('By Format')
                .child(
                  S.list()
                    .title('Events by Format')
                    .items([
                      S.listItem()
                        .title('Workshops')
                        .child(
                          S.documentTypeList('eventPage')
                            .title('Workshops')
                            .filter('_type == "eventPage" && "workshop" in formats[]')
                        ),
                      S.listItem()
                        .title('Conferences')
                        .child(
                          S.documentTypeList('eventPage')
                            .title('Conferences')
                            .filter('_type == "eventPage" && "conference" in formats[]')
                        ),
                      S.listItem()
                        .title('Exhibitions')
                        .child(
                          S.documentTypeList('eventPage')
                            .title('Exhibitions')
                            .filter('_type == "eventPage" && "exhibition" in formats[]')
                        ),
                    ])
                ),
            ])
        ),

      // News section with filtering
      S.listItem()
        .title('News')
        .child(
          S.list()
            .title('News')
            .items([
              S.listItem()
                .title('All News')
                .child(
                  S.documentTypeList('newsPage')
                    .title('All News')
                    .defaultOrdering([{ field: 'date', direction: 'desc' }])
                ),
              S.listItem()
                .title('Featured News')
                .child(
                  S.documentTypeList('newsPage')
                    .title('Featured News')
                    .filter('_type == "newsPage" && featuredType == "main"')
                    .defaultOrdering([{ field: 'date', direction: 'desc' }])
                ),
              S.listItem()
                .title('Recent News')
                .child(
                  S.documentTypeList('newsPage')
                    .title('Recent News (Last 30 days)')
                    .filter('_type == "newsPage" && date > dateTime(now()) - 30*24*3600')
                    .defaultOrdering([{ field: 'date', direction: 'desc' }])
                ),
            ])
        ),

      // Zones section
      S.listItem()
        .title('Zones')
        .child(
          S.list()
            .title('Zones')
            .items([
              S.listItem()
                .title('Zone Pages')
                .child(S.documentTypeList('zonePage').title('Zone Pages')),
              S.listItem()
                .title('Zones Listings')
                .child(S.documentTypeList('zonesListingPage').title('Zones Listings')),
            ])
        ),

      // Blog section
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('Posts')
                .child(S.documentTypeList('post').title('Posts')),
              S.listItem()
                .title('Authors')
                .child(S.documentTypeList('author').title('Authors')),
              S.listItem()
                .title('Categories')
                .child(S.documentTypeList('category').title('Categories')),
            ])
        ),

      // Settings (if you want to add global settings later)
      S.divider(),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              // Placeholder for future settings like site config, navigation, etc.
            ])
        ),
    ])
