import { Star, MapPin, BadgeCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services/$serviceId"
      params={{ serviceId: service.id }}
      className="group block rounded-xl overflow-hidden bg-card hover-lift border border-border/50"
    >
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {service.featured && (
          <span className="absolute top-3 left-3 gold-gradient text-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
            ⭐ Featured
          </span>
        )}
        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-destructive transition-colors">
          ♡
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1.5">
          <MapPin className="h-3 w-3" />
          {service.location}
        </div>
        <h3 className="font-display font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
          {service.title}
        </h3>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="text-sm font-medium text-card-foreground">
            {service.vendor}
          </span>
          {service.vendorVerified && (
            <BadgeCheck className="h-4 w-4 text-secondary" />
          )}
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
          <span className="text-sm font-semibold text-primary">
            {service.priceRange}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-sm font-medium text-card-foreground">{service.rating}</span>
            <span className="text-xs text-muted-foreground">({service.reviews})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
