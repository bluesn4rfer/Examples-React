#!/usr/bin/perl

$start_at = 61;

open(BOOTSTRAP, "node_modules/bootstrap/dist/css/bootstrap.css") || die "Couldn't open node_modules/bootstrap/dist/css/bootstrap.css\n";
    @bootstrap = <BOOTSTRAP>;
    chomp(@bootstrap);
close(BOOTSTRAP);

open(BOOTSTRAP, ">src/bootstrap.css") || die "Couldn't open src/bootstrap.css\n";
    $i = 1;
    foreach $line (@bootstrap){
        if($i > $start_at){
            $line =~ s/#0d6efd/var(--bs-primary)/ig;
            $line =~ s/#6c757d/var(--bs-secondary)/ig;
            $line =~ s/#198754/var(--bs-success)/ig;
            $line =~ s/#0dcaf0/var(--bs-info)/ig;
            $line =~ s/#ffc107/var(--bs-warning)/ig;
            $line =~ s/#dc3545/var(--bs-danger)/ig;
            $line =~ s/#f8f9fa/var(--bs-light)/ig;
            $line =~ s/#212529/var(--bs-dark)/ig;
        }

        print BOOTSTRAP "$line\n";
        $i++;
    }
close(BOOTSTRAP);